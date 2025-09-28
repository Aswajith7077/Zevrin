import { API_ENDPOINTS } from "@/constants/api/endpoints";
import { useApiQuery } from "@/services/api-service";
import type {
  FeaturedCategoryType,
  ListProductsResponseType,
} from "@/types/explore-deals.type";
import type { BannerResponseType } from "@/types/explore-deals/banners.type";
import type { UseQueryOptions } from "@tanstack/react-query";
import type { AxiosError } from "axios";

const useBannerQuery = () => {
  return useApiQuery<BannerResponseType[]>(API_ENDPOINTS.LIST_BANNERS_ENDPOINT);
};

const useFeaturedCategoriesQuery = (
  options: Omit<
    UseQueryOptions<FeaturedCategoryType[], AxiosError>,
    "queryKey" | "queryFn"
  > = {},
) => {
  return useApiQuery<FeaturedCategoryType[]>(
    API_ENDPOINTS.LIST_CATEGORIES_ENDPOINT,
    {},
    false,
    options,
  );
};

const useDealsQuery = (
  options: Omit<
    UseQueryOptions<ListProductsResponseType[], AxiosError>,
    "queryKey" | "queryFn"
  > = {},
) => {
  return useApiQuery<ListProductsResponseType[]>(
    API_ENDPOINTS.GET_PRODUCTS_ENDPOINT,
    {
      queryParams: {
        limit: "12",
      },
    },
    true,
    options,
  );
};

export { useBannerQuery, useFeaturedCategoriesQuery, useDealsQuery };
