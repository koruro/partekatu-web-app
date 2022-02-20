import { ExternalMultimediaAsset } from "../ExternalMultimediaAsset";

export class ExternalMultimediaAssetMapper {
	public static serialize(asset: ExternalMultimediaAsset) {
		if (!asset) return null;
		return {
			url: asset.props.url,
			altTitle: asset.props.altTitle,
			caption: asset.props.caption,
		};
	}
}
