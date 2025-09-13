import { JSX } from 'react';

type SubcontentType = {
  title: string;
  url: string;
  icon: JSX.Element;
  description: string;
};

type ContentType = {
  title: string;
  type: 'single_image_column' | 'double_column';
  subcontents: SubcontentType[];
};

export type { SubcontentType, ContentType };
