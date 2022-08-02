import {
  Coordinates,
  Euskaltegi,
  Location,
} from "../../models/euskaltegi/Euskaltegi";
import { TextMatch } from "../../models/TextMatch";
import { EuskaltegiRepository } from "./EuskaltegiRepository";

function restToEuskaltegiMapper(d: any): Euskaltegi {
  return {
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
  };
}

export class CustomEuskaltegiRepository implements EuskaltegiRepository {
  constructor(private baseUrl: string) {}
  async getNearbyEuskaltegis(
    coordinates: Coordinates,
    radius = 20
  ): Promise<Euskaltegi[]> {
    try {
      const response = await fetch(
        `${this.baseUrl}/euskaltegi/euskaltegis/nearby?lat=${coordinates.lat}&lng=${coordinates.lng}&radius=${radius}`
      );

      const json = await response.json();

      const data = json.data;
      if (!data) throw new Error(`No data found`);

      return data.map(restToEuskaltegiMapper);
    } catch (error) {
      console.error(error);
      return [];
    }
  }
  async getAllEuskaltegis(): Promise<Euskaltegi[]> {
    try {
      const response = await fetch(`${this.baseUrl}/euskaltegi/euskaltegis`);

      const json = await response.json();

      const data = json.data;
      if (!data) throw new Error(`No data found`);

      return data.map(restToEuskaltegiMapper);
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  async getLocationMatches(name: string): Promise<TextMatch[]> {
    try {
      const response = await fetch(
        `${this.baseUrl}/euskaltegi/matches/${name}`
      );

      const json = await response.json();

      const matches: TextMatch[] = json.data.map((r: any) => ({
        text: r.text,
        similarity: r.similarity,
      }));

      return matches.filter((match) => match.text !== name);
    } catch (error) {
      return [];
    }
  }

  async getEuskaltegisInLocation(location: string): Promise<Euskaltegi[]> {
    try {
      const response = await fetch(
        `${this.baseUrl}/euskaltegi/euskaltegis/${location}`
      );

      const json = await response.json();

      const data = json.data;
      if (!data) throw new Error(`No data found`);

      return data.map(restToEuskaltegiMapper);
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
