type BannerBlobType = {
  bucket: string;
  file_path: string;
  file_name: string;
};

const ContentAlignmentEnum = {
  left: "left",
  right: "right",
} as const;

type ContentAlignmentEnumType =
  (typeof ContentAlignmentEnum)[keyof typeof ContentAlignmentEnum];

type BannerResponseType = {
  title: string;
  description: string;
  deal_page: string;
  file_url: string;
  banner: BannerBlobType;
  content_alignment: ContentAlignmentEnumType;
  text_color: string;
};

export type { BannerResponseType, BannerBlobType, ContentAlignmentEnumType };
export { ContentAlignmentEnum };
