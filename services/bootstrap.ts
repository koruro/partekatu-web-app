import { ContentfulRepository } from "./ContentfulRepository";
import { CustomEuskaltegiRepository } from "./euskaltegi/CustomEuskaltegiRepository";
import { CustomNameTranslationAPIRepository } from "./name-translations/CustomNameTranslationAPIRepository";
import { MockNameTranslationsAPIRepository } from "./name-translations/MockNameTranslationsAPIRepository";
import { CustomSurnameAPIRepository } from "./surname/CustomSurnameAPIRepository";

const articleRepository = new ContentfulRepository();
const surnameRepository = new CustomSurnameAPIRepository(
  process.env.NEXT_PUBLIC_KORURO_BACKEND_URL ?? ""
);
const euskaltegiRepository = new CustomEuskaltegiRepository(
  process.env.NEXT_PUBLIC_KORURO_BACKEND_URL ?? ""
);
// const nameTranslationsRepository = new MockNameTranslationsAPIRepository();
const nameTranslationsRepository = new CustomNameTranslationAPIRepository(
  process.env.NEXT_PUBLIC_KORURO_BACKEND_URL ?? ""
);

export {
  articleRepository,
  surnameRepository,
  euskaltegiRepository,
  nameTranslationsRepository,
};
