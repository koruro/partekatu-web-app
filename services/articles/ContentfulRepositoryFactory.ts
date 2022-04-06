import { ContentfulRepository } from "../ContentfulRepository";
import { ContentRepository } from "../ContentRepository";
import { ContentRepositoryFactory } from "./ContentRepositoryFactory";

export class ContentfulRepositoryFactory implements ContentRepositoryFactory {
	private _repo: ContentfulRepository | null;
	private _previewRepo: ContentfulRepository | null;

	constructor() {
		this._repo = null;
		this._previewRepo = null;
	}

	createRepo(preview?: boolean): ContentRepository {
		if (preview) {
			if (this._previewRepo) return this._previewRepo;

			this._previewRepo = new ContentfulRepository(
				process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
				process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN!,
				true
			);

			return this._previewRepo;
		}

		if (this._repo) return this._repo;

		this._repo = new ContentfulRepository(
			process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
			process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!
		);

		return this._repo;
	}
}
