import type { Dispatch, SetStateAction } from "react";

type ImageType = {
  image_url: string;
  file_name: string;
};

type CategoryType = {
  title: string;
  image: ImageType;
  redirect_url: string;
};

type BlobDataType = {
  bucket: string;
  file_path: string;
};

type FeaturedCategoryType = {
  title: string;
  blob_data: BlobDataType;
  sub_categories: CategoryType[];
};

type CategoryButtonsPropType = {
  state: number;
  setState: Dispatch<SetStateAction<number>>;
  data: FeaturedCategoryType[] | undefined;
};

type ListProductsResponseType = {
  NAME: string;
  BRAND: string;
  FINAL_PRICE: number;
  CURRENCY: string;
  CATEGORIES: string[];
  IMAGES: string;
  RATING: number;
  STOCK: number;
};

export type {
  FeaturedCategoryType,
  CategoryButtonsPropType,
  ListProductsResponseType,
  CategoryType,
};
