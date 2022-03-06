import { SurnameData, SurnameMatch } from "../../models/surname/SurnameMatch";
import { sleep } from "../../utils/sleep";
import { SurnameAPIRepository } from "./SurnameAPIRepository";

export class MockSurnameAPIRepository implements SurnameAPIRepository {
	async getSimilarSurnames(name?: string): Promise<SurnameMatch[]> {
		if (!name) return [];
		await sleep(500);
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
			surname: surname,
			isAcademic: true,
			normal: {
				firstOnly: 200,
				secondOnly: 30,
				both: 10,
			},
			academic: {
				firstOnly: 200,
				secondOnly: 30,
				both: 10,
			},
		};
	}
}
