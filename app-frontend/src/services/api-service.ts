import { CONFIG } from "@/config/config";
import type {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  InternalAxiosRequestConfig,
} from "axios";
import axios from "axios";
import tokenManager from "./token-manager";
import {
  type API_ENDPOINTS_TYPE,
  type API_METHODS_TYPE,
} from "@/constants/api/endpoints";
import endpointService from "./endpoint-service";
import {
  useMutation,
  useQuery,
  type UseMutationResult,
  type UseQueryOptions,
  type UseQueryResult,
} from "@tanstack/react-query";

class ApiService {
  private apiInstance: AxiosInstance;

  private initRequestInterceptor() {
    this.apiInstance.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        const accessToken = localStorage.getItem("accessToken");
        if (accessToken) {
          config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      },
    );
  }

  private initResponseInterceptor() {
    this.apiInstance.interceptors.response.use(
      (response) => {
        return response;
      },
      async (error) => {
        const originalRequest = error.config;
        if (error.response.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;

          try {
            const refreshToken = tokenManager.getRefreshToken();
            if (!refreshToken) {
              throw new Error("Refresh token not found");
            }
            const response = await axios.post(
              "/auth/refresh-token",
              {
                refreshToken: refreshToken,
              },
              {
                baseURL: CONFIG.BASE_URL,
              },
            );
            const accessToken = response.data.accessToken;
            const newRefreshToken = response.data.refreshToken;
            tokenManager.storeTokens(accessToken, newRefreshToken);
            originalRequest.headers.Authorization = `Bearer ${accessToken}`;
            return this.apiInstance(originalRequest);
          } catch (error) {
            console.error("Error refreshing token:", error);
            return Promise.reject(error);
          }
        }
        return Promise.reject(error);
      },
    );
  }

  public constructor(axios_config: AxiosRequestConfig) {
    this.apiInstance = axios.create(axios_config);
    this.initRequestInterceptor();
    this.initResponseInterceptor();
  }

  public async apiRequest<TRequest = unknown, TResponse = unknown>(
    data: TRequest,
    endpoint: API_ENDPOINTS_TYPE,
    method: API_METHODS_TYPE,
    {
      queryParams,
      pathParams,
    }: {
      queryParams?: Record<string, string>;
      pathParams?: Record<string, string | number>;
    } = {},
    isAuthRequired: boolean = true,
    customConfig: AxiosRequestConfig = {},
  ): Promise<TResponse> {
    const endpointWithPathParams: string =
      endpointService.getEndModifiedGetPoint(endpoint, pathParams);
    const url: string = endpointService.getEndPoint(endpointWithPathParams);

    const headers: Record<string, string> = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };

    if (isAuthRequired) {
      const accessToken = await tokenManager.getAccessToken();
      if (!accessToken) {
        throw new Error("Access token not found");
      }
      headers.Authorization = accessToken ? `Bearer ${accessToken}` : "";
    }
    const config: AxiosRequestConfig = {
      method: method,
      url,
      headers: headers,
      params: queryParams,
      data,
      ...customConfig,
    };
    const response = await this.apiInstance.request(config);
    return response.data;
  }
}
const apiService = new ApiService({
  baseURL: CONFIG.BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

const useApiQuery = <TResponse>(
  endpoint: API_ENDPOINTS_TYPE,
  params: {
    pathParams?: Record<string, string | number>;
    queryParams?: Record<string, string>;
  } = {},
  requiresAuth: boolean = true,
  options: Omit<
    UseQueryOptions<TResponse, AxiosError>,
    "queryKey" | "queryFn"
  > = {},
): UseQueryResult<TResponse, AxiosError> => {
  const { pathParams, queryParams } = params;
  return useQuery({
    queryKey: [endpoint, pathParams, queryParams],
    queryFn: () =>
      apiService.apiRequest<Record<string, unknown>, TResponse>(
        {},
        endpoint,
        "GET",
        { pathParams, queryParams },
        requiresAuth,
      ),
    ...options,
  });
};

const useApiMutation = <TRequest, TResponse>(
  endpoint: API_ENDPOINTS_TYPE,
  method: API_METHODS_TYPE,
  {
    pathParams,
    queryParams,
  }: {
    pathParams?: Record<string, string | number>;
    queryParams?: Record<string, string>;
  } = {},
  requiresAuth: boolean = false,
  customConfig: AxiosRequestConfig = {},
): UseMutationResult<TResponse, AxiosError, TRequest> => {
  return useMutation({
    mutationFn: (data: TRequest) =>
      apiService.apiRequest<TRequest, TResponse>(
        data,
        endpoint,
        method,
        { pathParams, queryParams },
        requiresAuth,
        customConfig,
      ),
  });
};

export { useApiQuery, useApiMutation };
