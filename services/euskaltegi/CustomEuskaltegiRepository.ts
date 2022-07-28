import { Euskaltegi, Location } from "../../models/euskaltegi/Euskaltegi";
import { EuskaltegiRepository } from "./EuskaltegiRepository";

export class CustomEuskaltegiRepository implements EuskaltegiRepository {
  constructor(private baseUrl: string) {}

  async getEuskaltegisInLocation(location: string): Promise<Euskaltegi[]> {
    try {
      const response = await fetch(
        `${this.baseUrl}/euskaltegi/euskaltegis/${location}`
      );

      const json = await response.json();

      const data = json.data;
      if (!data) throw new Error(`No data found`);

      return data.map((d: any) => ({
        name: d.name,
        imgUrl: d.imgUrl,
        coordinates: {
          lat: d.coordinates.lat,
          lng: d.coordinates.lng,
        },

        websiteUrl: d.websiteUrl,
        mailContact: d.mailContact,
        phone: d.phone,
        address: d.address,
        city: d.city,
        province: d.province,
        postalCode: d.postalCode,
        net: d.net,
        access: d.access,
        rating: { score: d.rating.score },
        isPromoted: d.isPromoted,
      }));
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  async getAllLocations(): Promise<Location[]> {
    try {
      const response = await fetch(`${this.baseUrl}/euskaltegi/locations`);

      const json = await response.json();

      const data = json.data;
      if (!data) throw new Error(`No data found`);

      return data.map((d: any) => ({
        name: d.name,
        imgUrl: d.imgUrl,
        coordinates: {
          lat: d.coordinates.lat,
          lng: d.coordinates.lng,
        },
      }));
    } catch (error) {
      console.error(error);
      return [];
    }
  }
  async getLocationInfo(name: string): Promise<Location | undefined> {
    try {
      const response = await fetch(
        `${this.baseUrl}/euskaltegi/locations/${name}`
      );

      const json = await response.json();

      const data = json.data;
      if (!data) return;

      return {
        name: data.name,
        imgUrl: data.imgUrl,
        coordinates: {
          lat: data.coordinates.lat,
          lng: data.coordinates.lng,
        },
      };
    } catch (error) {
      console.error(error);
      return;
    }
  }
}
