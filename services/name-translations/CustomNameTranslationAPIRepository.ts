import {
  NameOrigin,
  NameMatch,
  NameTranslationData,
  NameTranslationDataResponse,
} from "../../models/name-translations/NameMatch";
import { NameTranslationsAPIRepository } from "./NameTranslationsAPIRepository";

export class CustomNameTranslationAPIRepository
  implements NameTranslationsAPIRepository
{
  constructor(private baseUrl: string) {}
  async getSimilarNames(
    origin: NameOrigin,
    destination: NameOrigin,
    name?: string | undefined
  ): Promise<NameMatch[]> {
    try {
      const response = await fetch(
        `${this.baseUrl}/name-translations/matches/${name}?origin=${origin}&destination=${destination}`
      );

      const json = await response.json();

      const matches: NameMatch[] = json.data.map((r: any) => ({
        name: r.text,
        similarity: r.similarity,
      }));

      return matches;
    } catch (error) {
      return [];
    }
  }
  async getNameData(
    origin: NameOrigin,
    name: string
  ): Promise<NameTranslationDataResponse> {
    try {
      const response = await fetch(
        `${this.baseUrl}/name-translations/${name}?origin=${origin}`
      );
      const json = await response.json();

      if ([500, 400, 404].includes(response.status)) {
        return { error: json.message, inputName: name };
      }

      return {
        name: json.name,
        gender: json.gender,
        origin: json.origin,
        translations: json.translations,
      };
    } catch (error: any) {
      return { error: error.message, inputName: name };
    }
  }
  getAllNameTranslations(): Promise<NameTranslationData[]> {
    throw new Error("Method not implemented.");
  }
}
