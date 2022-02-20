import { Entity } from "./Entity";
import { Id } from "./Id";

export interface Props {
	slug: string;
	title: string;
}

export class ReferedArticle extends Entity<Props> {
	private constructor(props: Props, id?: Id) {
		super(props, id);
	}

	public static create(props: Props, id: Id) {
		const e = new this(
			{
				slug: props.slug,
				title: props.title,
			},
			id
		);

		return e;
	}
}
