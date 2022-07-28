import {
  Euskaltegi,
  EuskaltegiAccess,
  Location,
} from "../../models/euskaltegi/Euskaltegi";
import { TextMatch } from "../../models/TextMatch";
import { EuskaltegiRepository } from "./EuskaltegiRepository";

const locations: Location[] = [
  {
    name: "tolosa",
    coordinates: { lat: 43.1603306, lng: -2.7845025 },
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Tolosako_udaletxea_2.jpg/640px-Tolosako_udaletxea_2.jpg",
  },
  {
    name: "donostia",
    coordinates: { lat: 43.1603306, lng: -2.7845025 },
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/San_Sebastian_Donostia_Panoramic_1190583.jpg/640px-San_Sebastian_Donostia_Panoramic_1190583.jpg",
  },
];

export class MockEuskaltegiRepository implements EuskaltegiRepository {
  async getLocationMatches(name: string): Promise<TextMatch[]> {
    throw new Error("Method not implemented.");
  }
  async getLocationInfo(name: string): Promise<Location | undefined> {
    return locations.find((l) => l.name === name);
  }
  async getEuskaltegisInLocation(location: string): Promise<Euskaltegi[]> {
    return [
      {
        name: "Aitzol Udal Euskaltegia",
        province: "Bizkaia",
        city: location,
        address: "Rondilla Kalea",
        imgUrl:
          "https://www.bergara.eus/sites/default/files/albiste-argazki/udal_euskaltegia_ikurra_5.jpg",
        mailContact: "aitzolue@tolosa.eus",
        phone: "943651006",
        postalCode: "20400",
        coordinates: { lat: 43.1393682, lng: -2.0757123 },
        websiteUrl: "https://udala.tolosa.eus/eu/aitzol-udal-euskaltegia",
        net: "AEK",
        access: EuskaltegiAccess.PRIVATE,
        rating: { score: 4 },
      },
      {
        name: "Altza Euskaltegia",
        province: "Gipuzkoa",
        city: location,
        address: "C. Txapinene, 1",
        imgUrl:
          "https://upload.wikimedia.org/wikipedia/commons/b/bc/IKAren_ikurra.jpg",
        mailContact: "altza@urumeaeuskaltegia.eus",
        phone: "943400316",
        postalCode: "20017",
        coordinates: { lat: 43.3164494, lng: -1.9363533 },
        websiteUrl: "https://udala.tolosa.eus/eu/aitzol-udal-euskaltegia",
        net: "AEK",
        access: EuskaltegiAccess.PRIVATE,
        rating: { score: 3 },
      },
      {
        province: "Gipuzkoa",
        city: location,
        address: "Elexalde Kalea, 10",
        imgUrl:
          "data:image/png;base64,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",
        mailContact: "arratia@aek.eus",
        name: "Arratiako AEK Euskaltegia",
        phone: "943400316",
        postalCode: "48140",
        coordinates: { lat: 43.1603306, lng: -2.7845025 },
        websiteUrl: "https://udala.tolosa.eus/eu/aitzol-udal-euskaltegia",
        net: "AEK",
        access: EuskaltegiAccess.PUBLIC,
        rating: { score: 3.5 },
        isPromoted: true,
      },
    ];
  }
  async getAllLocations(): Promise<Location[]> {
    return locations;
  }
}
