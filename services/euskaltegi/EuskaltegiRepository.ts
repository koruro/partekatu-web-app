import {
  Coordinates,
  Euskaltegi,
  Location,
} from "../../models/euskaltegi/Euskaltegi";
import { TextMatch } from "../../models/TextMatch";

export interface EuskaltegiRepository {
  getEuskaltegisInLocation(location: string): Promise<Euskaltegi[]>;
  getAllLocations(): Promise<Location[]>;
  getAllEuskaltegis(): Promise<Euskaltegi[]>;
  getLocationInfo(name: string): Promise<Location | undefined>;
  getLocationMatches(name: string): Promise<TextMatch[]>;
  getNearbyEuskaltegis(
    coordinates: Coordinates,
    radius?: number
  ): Promise<Euskaltegi[]>;
  getNearestEuskaltegis(
    coordinates: Coordinates,
    limit?: number
  ): Promise<Euskaltegi[]>;
}
