import { isUndefinedOrNull } from "../utils/isUndefined";
import { ValueObject } from "./Entity";

export interface ArticleMetadata {}

export interface Props {
	title: string;
	description: string;
}

export class SeoMetadata extends ValueObject<Props> {
	private constructor(props: Props) {
		super(props);
		this.checkForMissingAttribute("title");
		this.checkForMissingAttribute("description");
	}

	get title() {
		return this.props.title;
	}

	get description() {
		return this.props.description;
	}

	public static create(props: Props) {
		const vo = new this({
			title: props.title,
			description: props.description,
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
