import { Euskaltegi } from "../../models/euskaltegi/Euskaltegi";
import { EuskaltegiRepository } from "./EuskaltegiRepository";

export class MockEuskaltegiRepository implements EuskaltegiRepository {
  async findManyByPlace(place: string): Promise<Euskaltegi[]> {
    return [
      {
        province: "Bizkaia",
        city: place,
        address: "My adress",
        imgUrl:
          "https://www.bergara.eus/sites/default/files/albiste-argazki/udal_euskaltegia_ikurra_5.jpg",
        mailContact: "euskaltegi@email.com",
        name: "Aitzol Udal Euskaltegia",
        phone: "943651006",
        postalCode: "01005",
        coordinates: { lat: 42, long: 23 },
        websiteUrl: "https://udala.tolosa.eus/eu/aitzol-udal-euskaltegia",
        net: "AEK",
      },
      {
        province: "Gipuzkoa",
        city: place,
        address: "My adress",
        imgUrl:
          "https://upload.wikimedia.org/wikipedia/commons/b/bc/IKAren_ikurra.jpg",
        mailContact: "euskaltegi@email.com",
        name: "Altza Euskaltegia",
        phone: "943400316",
        postalCode: "01005",
        coordinates: { lat: 42, long: 23 },
        websiteUrl: "https://udala.tolosa.eus/eu/aitzol-udal-euskaltegia",
        net: "AEK",
      },
    ];
  }
  async getAllPlaces(): Promise<string[]> {
    return ["tolosa", "donostia"];
  }
}
