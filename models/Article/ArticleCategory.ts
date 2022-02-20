import { CategoriesEnum } from "../../types/categories";
import { isUndefinedOrNull } from "../../utils/isUndefined";
import { Entity } from "../Entity";
import { Id } from "../Id";
import { Locale } from "../LocaleData";

interface Props {
	uidSlug: CategoriesEnum;
	title: string;
	slug: string;
	description?: string;
	locale: Locale;
}

export class ArticleCategory extends Entity<Props> {
	private constructor(props: Props, id: Id) {
		super(props, id);
		this.checkForMissingAttribute("uidSlug");
	}

	get uidSlug() {
		return this.props.uidSlug;
	}

	public static create(props: Props, id: Id) {
		const e = new this(
			{
				slug: props.slug,
				uidSlug: props.uidSlug,
				locale: props.locale,
				title: props.title,
				description: props.description,
			},
			id
		);

		return e;
	}

	private checkForMissingAttribute(attribute: keyof Props) {
		if (isUndefinedOrNull(this.props[attribute]))
			throw new Error(
				`${this.constructor.name} is missing attribute {${attribute}}`
			);
		return false;
	}
}
