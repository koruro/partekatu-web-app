import {
  Coordinates,
  Euskaltegi,
  Location,
} from "../../models/euskaltegi/Euskaltegi";
import { EuskaltegiFoundCode } from "./EuskaltegiFoundCode";
import { EuskaltegiRepository } from "./EuskaltegiRepository";

export const getNearbyOrNearest = async (
  repo: EuskaltegiRepository,
  coordinates: Coordinates
): Promise<[Euskaltegi[], EuskaltegiFoundCode]> => {
  const nearbyEuskaltegis = await repo.getNearbyEuskaltegis(coordinates);

  if (nearbyEuskaltegis.length === 0) {
    return [
      await repo.getNearestEuskaltegis(coordinates, 3),
      EuskaltegiFoundCode.FOUND_NEAREST,
    ];
  }

  return [nearbyEuskaltegis, EuskaltegiFoundCode.FOUND_NEARBY];
};

export const getInLocationNearbyOrNearest = async (
  repo: EuskaltegiRepository,
  location: Location
): Promise<[Euskaltegi[], EuskaltegiFoundCode]> => {
  const euskaltegis = await repo.getEuskaltegisInLocation(location.name);

  if (euskaltegis.length <= 0) {
    return await getNearbyOrNearest(repo, location.coordinates);
  }

  return [euskaltegis, EuskaltegiFoundCode.FOUND_IN_LOCATION];
};
