import { SurnameData, SurnameMatch } from "../../models/surname/SurnameMatch";

export interface SurnameAPIRepository {
  getSimilarSurnames(name?: string): Promise<SurnameMatch[]>;
  getSurnameData(surname: string): Promise<SurnameData>;
}
