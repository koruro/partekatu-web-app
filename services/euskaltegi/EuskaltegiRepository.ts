import { Euskaltegi, Location } from "../../models/euskaltegi/Euskaltegi";
import { TextMatch } from "../../models/TextMatch";

export interface EuskaltegiRepository {
  getEuskaltegisInLocation(location: string): Promise<Euskaltegi[]>;
  getAllLocations(): Promise<Location[]>;
  getLocationInfo(name: string): Promise<Location | undefined>;
  getLocationMatches(name: string): Promise<TextMatch[]>;
}
