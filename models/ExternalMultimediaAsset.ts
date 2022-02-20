import { isUndefinedOrNull } from "../utils/isUndefined";
import { ValueObject } from "./Entity";

interface Props {
	url: string;
	altTitle: string | null;
	caption: string | null;
}

interface CreateProps {
	url: string;
	altTitle?: string;
	caption?: string;
}

export class ExternalMultimediaAsset extends ValueObject<Props> {
	private constructor(props: Props) {
		super(props);
		this.checkForMissingAttribute("url");
	}

	public get url() {
		return this.props.url;
	}

	public get altTitle() {
		return this.props.altTitle;
	}

	public static create(props: CreateProps): ExternalMultimediaAsset {
		const vo = new this({
			url: props.url,
			altTitle: props.altTitle ?? null,
			caption: props.caption ?? null,
		});

		return vo;
	}

	private checkForMissingAttribute(attribute: keyof Props) {
		if (isUndefinedOrNull(this.props[attribute]))
			throw new Error(
				`${this.constructor.name} is missing attribute {${attribute}}`
			);
		return false;
	}
}
