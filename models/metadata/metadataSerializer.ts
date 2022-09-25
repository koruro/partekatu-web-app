import { optionFrom } from "rorjs";
import { SeoMetadata } from "./Metadata";

export const serializeSeoMetadata = (metadata: SeoMetadata) => {
  return {
    titleAlt: metadata.titleAlt.unwrapOr(null),
    metaTitle: metadata.metaTitle.unwrapOr(null),
    metaDesc: metadata.metaDesc.unwrapOr(null),
  };
};

export const deserializeSeoMetadata = (
  metadata: ReturnType<typeof serializeSeoMetadata>
): SeoMetadata => {
  return {
    titleAlt: optionFrom(metadata.titleAlt ?? undefined),
    metaTitle: optionFrom(metadata.metaTitle ?? undefined),
    metaDesc: optionFrom(metadata.metaDesc ?? undefined),
  };
};
