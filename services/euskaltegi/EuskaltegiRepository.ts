import { Euskaltegi, Location } from "../../models/euskaltegi/Euskaltegi";

export interface EuskaltegiRepository {
  getEuskaltegisInLocation(location: string): Promise<Euskaltegi[]>;
  getAllLocations(): Promise<Location[]>;
  getLocationInfo(name: string): Promise<Location | undefined>;
}
