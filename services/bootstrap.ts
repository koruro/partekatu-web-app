import { ContentfulRepository } from "./ContentfulRepository";
import { CustomEuskaltegiRepository } from "./euskaltegi/CustomEuskaltegiRepository";
import { CustomSurnameAPIRepository } from "./surname/CustomSurnameAPIRepository";

const articleRepository = new ContentfulRepository();
const surnameRepository = new CustomSurnameAPIRepository(
  process.env.NEXT_PUBLIC_KORURO_BACKEND_URL ?? ""
);
const euskaltegiRepository = new CustomEuskaltegiRepository(
  process.env.NEXT_PUBLIC_KORURO_BACKEND_URL ?? ""
);

export { articleRepository, surnameRepository, euskaltegiRepository };
