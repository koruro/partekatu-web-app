import {
  NameMatch,
  NameOrigin,
  NameTranslationData,
  NameTranslationDataResponse,
} from "../../models/name-translations/NameMatch";

export interface NameTranslationsAPIRepository {
  getSimilarNames(
    origin: NameOrigin,
    destination: NameOrigin,
    name?: string
  ): Promise<NameMatch[]>;
  getNameData(
    origin: NameOrigin,
    surname: string
  ): Promise<NameTranslationDataResponse>;
  getAllNameTranslations(origin: NameOrigin): Promise<NameTranslationData[]>;
}
