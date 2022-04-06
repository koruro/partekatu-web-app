import { ContentRepository } from "../ContentRepository";

export interface ContentRepositoryFactory {
	createRepo(preview?: boolean): ContentRepository;
}
