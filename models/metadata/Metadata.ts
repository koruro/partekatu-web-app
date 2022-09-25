import { Option } from "rorjs";

export interface ArticleMetadata {
  [key: string]: any;
}

export interface SeoMetadata {
  titleAlt: Option<string>;
  metaTitle: Option<string>;
  metaDesc: Option<string>;
}
