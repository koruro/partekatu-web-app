import { Infographic } from "../Article/Infographic";

export class InfographicMapper {
	public static serialize(infographic: Infographic) {
		if (!infographic) return null;
		return {
			name: infographic.props.name,
			altTitle: infographic.props.altTitle,
			caption: infographic.props.caption,
			ext: infographic.props.ext,
			width: infographic.props.width,
			height: infographic.props.height,
			size: infographic.props.size,
			url: infographic.props.url,
		};
	}

	public static deserialize(infographic: any): Infographic {
		return Infographic.create({
			name: infographic.name,
			altTitle: infographic.altTitle,
			caption: infographic.caption,
			ext: infographic.ext,
			width: infographic.width,
			height: infographic.height,
			size: infographic.size,
			url: infographic.url,
		});
	}
}
