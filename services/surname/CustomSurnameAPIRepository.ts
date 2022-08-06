import { SurnameData, SurnameMatch } from "../../models/surname/SurnameMatch";
import { SurnameAPIRepository } from "./SurnameAPIRepository";

export class CustomSurnameAPIRepository implements SurnameAPIRepository {
  constructor(private baseUrl: string) {}
  async getSimilarSurnames(name?: string): Promise<SurnameMatch[]> {
    try {
      const response = await fetch(
        `${this.baseUrl}/surname/matches?surname=${name}`
      );

      const json = await response.json();

      const matches: SurnameMatch[] = json.data.map((r: any) => ({
        surname: r.surname,
        similarity: r.similarity,
      }));

      return matches.filter((match) => match.surname !== name);
    } catch (error) {
      return [];
    }
  }
  async getSurnameData(surname: string): Promise<SurnameData> {
    try {
      const response = await fetch(
        `${this.baseUrl}/surname?surname=${surname}`
      );
      const json = await response.json();

      if (response.status === 500) {
        return {
          isBasque: false,
          surname,
          isAcademic: false,
          analytics: {
            both: null,
            firstOnly: null,
            secondOnly: null,
          },
          relations: [],
          suggestions: await this.getSimilarSurnames(surname),
        };
      }

      return {
        surname: json.surname,
        isBasque: true,
        isAcademic: json.isAcademic,
        analytics: {
          firstOnly: json.analytics.firstOnly,
          secondOnly: json.analytics.secondOnly,
          both: json.analytics.both,
        },
        relations: json.relations,
        suggestions: await this.getSimilarSurnames(json.surname),
      };
    } catch (error) {
      throw error;
    }
  }
}
