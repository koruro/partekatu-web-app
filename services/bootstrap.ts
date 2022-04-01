import { ContentfulRepository } from "./ContentfulRepository";
import { CustomSurnameAPIRepository } from "./surname/CustomSurnameAPIRepository";

const articleRepository = new ContentfulRepository();
const surnameRepository = new CustomSurnameAPIRepository(
	process.env.NEXT_PUBLIC_KORURO_BACKEND_URL!
);

export { articleRepository, surnameRepository };
