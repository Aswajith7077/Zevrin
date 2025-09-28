import { CONFIG } from "@/config/config";

const BASE_URL = CONFIG.BASE_URL;

export const API_ENDPOINTS = {
  // User Endpoints
  LOGIN_ENDPOINT: `auth/login`,
  SIGNIN_ENDPOINT: `auth/add_user`,

  // Banners
  LIST_BANNERS_ENDPOINT: `products/list_banners`,

  // Categories
  LIST_CATEGORIES_ENDPOINT: `categories/list_categories`,

  GET_PRODUCTS_ENDPOINT: `products/list_products`,
  SEARCH_PRODUCTS_ENDPOINT: `products/search`,
  GET_DETAILS_ENDPOINT: `products/get_details`,

  // Auth Endpoints
  REFRESH_ENPOINT: `auth/refresh`,
} as const;

export type API_METHODS_TYPE = "GET" | "POST" | "PUT" | "DELETE";

export type API_ENDPOINTS_TYPE =
  (typeof API_ENDPOINTS)[keyof typeof API_ENDPOINTS];

export { BASE_URL };
