import { ValueObject } from "../Entity";

export interface Props {
	name: string;
	altTitle: string;
	caption: string;
	ext: string;
	width: number;
	height: number;
	size: number;
	url: string;
}

export class Infographic extends ValueObject<Props> {
	private constructor(props: Props) {
		super(props);
	}

	public static create(props: Props): Infographic {
		const vo = new this({
			name: props.name,
			url: props.url,
			altTitle: props.altTitle,
			caption: props.caption,
			ext: props.ext,
			size: props.size,
			height: props.height,
			width: props.width,
		});

		return vo;
	}
}
