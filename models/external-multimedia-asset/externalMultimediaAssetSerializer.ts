import { optionFrom } from "rorjs";
import { ExternalMultimediaAsset } from "./ExternalMultimediaAsset";

export const serializeExternalMultimediaAsset = (
  asset: ExternalMultimediaAsset
) => {
  return {
    url: asset.url,
    altTitle: asset.altTitle.unwrapOr(null),
    caption: asset.caption.unwrapOr(null),
  };
};

export const deserializeExternalMultimediaAsset = (
  asset: ReturnType<typeof serializeExternalMultimediaAsset>
): ExternalMultimediaAsset => {
  return ExternalMultimediaAsset.create({
    url: asset.url,
    altTitle: optionFrom(asset.altTitle ?? undefined),
    caption: optionFrom(asset.caption ?? undefined),
  });
};
