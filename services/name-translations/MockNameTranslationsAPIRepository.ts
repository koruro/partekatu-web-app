import {
  NameOrigin,
  NameMatch,
  NameTranslationData,
  Gender,
  NameTranslationDataResponse,
} from "../../models/name-translations/NameMatch";
import { NameTranslationsAPIRepository } from "./NameTranslationsAPIRepository";

export class MockNameTranslationsAPIRepository
  implements NameTranslationsAPIRepository
{
  async getAllNameTranslations(
    origin: NameOrigin
  ): Promise<NameTranslationData[]> {
    return [
      {
        name: "Ander",
        gender: Gender.Male,
        origin,
        translations: [],
      },
      {
        name: "Benito",
        gender: Gender.Male,
        origin,
        translations: [],
      },
      {
        name: "Eider",
        gender: Gender.Female,
        origin,
        translations: [],
      },
    ];
  }
  async getSimilarNames(
    origin: NameOrigin,
    destination: NameOrigin,
    name?: string | undefined
  ): Promise<NameMatch[]> {
    return [{ name: "Xabierto", similarity: 1 }];
  }
  async getNameData(
    origin: NameOrigin,
    name: string
  ): Promise<NameTranslationDataResponse> {
    return {
      name,
      gender: Gender.Female,
      origin,
      translations: [],
    };
  }
}
