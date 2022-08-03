import { Coordinates, Euskaltegi } from "../../models/euskaltegi/Euskaltegi";
import { EuskaltegiRepository } from "./EuskaltegiRepository";

export const getNearbyOrNearest = async (
  repo: EuskaltegiRepository,
  coordinates: Coordinates
): Promise<Euskaltegi[]> => {
  const nearbyEuskaltegis = await repo.getNearbyEuskaltegis(coordinates);

  if (nearbyEuskaltegis.length === 0) {
    return await repo.getNearestEuskaltegis(coordinates, 3);
  }

  return nearbyEuskaltegis;
};
