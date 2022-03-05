import { SurnameData, SurnameMatch } from "../../models/surname/SurnameMatch";
import { SurnameAPIRepository } from "./SurnameAPIRepository";

export class MockSurnameAPIRepository implements SurnameAPIRepository {
	async getSimilarSurnames(name?: string): Promise<SurnameMatch[]> {
		if (!name) return [];
		return [
			{
				surname: "Abarrategui",
				similarity: 1,
			},
			{
				surname: "Ibarrategi",
				similarity: 0.4,
			},
			{
				surname: "Esotegui",
				similarity: 0.2,
			},
		];
	}
	async getSurnameData(surname: string): Promise<SurnameData> {
		return {
			normal: surname,
			academic: surname,
			academicStats: {
				firstOnly: 200,
				secondOnly: 30,
				both: 10,
			},
			normalStats: {
				firstOnly: 200,
				secondOnly: 30,
				both: 10,
			},
		};
	}
}
