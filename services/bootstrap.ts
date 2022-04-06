import { ContentfulRepositoryFactory } from "./articles/ContentfulRepositoryFactory";
import { ContentRepositoryFactory } from "./articles/ContentRepositoryFactory";
import { CustomSurnameAPIRepository } from "./surname/CustomSurnameAPIRepository";

const surnameRepository = new CustomSurnameAPIRepository(
	process.env.NEXT_PUBLIC_KORURO_BACKEND_URL!
);

const ContentRepositoryFactory: ContentRepositoryFactory =
	new ContentfulRepositoryFactory();

export { ContentRepositoryFactory, surnameRepository };
