import { SeoMetadata } from "../Metadata";

export class SeoMetadataMapper {
	public static serialize(seoMetadata: SeoMetadata) {
		return {
			title: seoMetadata.props.title,
			description: seoMetadata.props.description,
		};
	}
}
