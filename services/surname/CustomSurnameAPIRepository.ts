import { SurnameData, SurnameMatch } from "../../models/surname/SurnameMatch";
import { sleep } from "../../utils/sleep";
import { SurnameAPIRepository } from "./SurnameAPIRepository";

export class CustomSurnameAPIRepository implements SurnameAPIRepository {
	constructor(private baseUrl: string) {}
	async getSimilarSurnames(name?: string): Promise<SurnameMatch[]> {
		try {
			const response = await fetch(
				`${this.baseUrl}/surname/matches?surname=${name}`
			);

			const json = await response.json();

			return json.data.map((r: any) => ({
				surname: r.surname,
				similarity: r.similarity,
			}));
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

			return {
				surname: json.surname,
				isAcademic: json.isAcademic,
				normal: {
					surname: json.normal.surname,
					analytics: {
						firstOnly: json.normal.analytics.firstOnly,
						secondOnly: json.normal.analytics.secondOnly,
						both: json.normal.analytics.both,
					},
				},
				academic: {
					surname: json.academic.surname,
					analytics: {
						firstOnly: json.academic.analytics.firstOnly,
						secondOnly: json.academic.analytics.secondOnly,
						both: json.academic.analytics.both,
					},
				},
			};
		} catch (error) {
			throw error;
		}
	}
}
