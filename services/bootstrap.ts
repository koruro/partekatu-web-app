import { ContentfulRepository } from "./ContentfulRepository";
import { MockEuskaltegiRepository } from "./euskaltegi/MockEuskaltegiRepository";
import { CustomSurnameAPIRepository } from "./surname/CustomSurnameAPIRepository";

const articleRepository = new ContentfulRepository();
const surnameRepository = new CustomSurnameAPIRepository(
  process.env.NEXT_PUBLIC_KORURO_BACKEND_URL ?? ""
);
const euskaltegiRepository = new MockEuskaltegiRepository();

export { articleRepository, surnameRepository, euskaltegiRepository };
