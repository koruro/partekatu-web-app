import { ArticleProps } from "../Article/Article";

export class ArticleMissingAttributeError extends Error {
	constructor(attribute: keyof ArticleProps) {
		const message = `Article missing attribute ${attribute}`;
		super(message);

		this.name = "ArticleMissingAttributeError";
		this.message = message;
	}
}
