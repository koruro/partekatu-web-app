import { SeoMetadata } from "./metadata/Metadata";

export interface Category {
  id: string;
  name: string;
  slug: string;
  title: string;
  color: string;
  description?: string;
  locale?: string;
  seoMetadata?: SeoMetadata;
  created_at: string;
  updated_at: string;
}
