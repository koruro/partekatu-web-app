import { Euskaltegi } from "../../models/euskaltegi/Euskaltegi";

export interface EuskaltegiRepository {
  findManyByPlace(place: string): Promise<Euskaltegi[]>;
}
