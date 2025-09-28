import { BASE_URL, type API_ENDPOINTS_TYPE } from "@/constants/api/endpoints";

class EndpointService {
  public constructor() {}
  public getEndPoint = (endpoint: string) => {
    const normalized_url = BASE_URL.endsWith("/") ? BASE_URL : `${BASE_URL}/`;
    return `${normalized_url}${endpoint}`;
  };

  public getEndModifiedGetPoint = (
    endpoint: API_ENDPOINTS_TYPE,
    params?: Record<string, string | number>,
  ): string => {
    if (!params) return endpoint; // If no params, return as is

    return Object.keys(params).reduce(
      (url, key) => url.replace(`{${key}}`, String(params[key])),
      endpoint,
    );
  };
}

const endpointService = new EndpointService();
export default endpointService;
