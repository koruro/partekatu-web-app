export enum EuskaltegiAccess {
  PUBLIC = "public",
  PRIVATE = "private",
}

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface Rating {
  score: number;
}

export interface Euskaltegi {
  name: string;
  websiteUrl: string;
  mailContact: string;
  phone: string;
  address: string;
  city: string;
  province: string;
  postalCode: string;
  coordinates: Coordinates;
  imgUrl: string;
  net: string;
  access: EuskaltegiAccess;
  rating: Rating;
  isPromoted?: boolean;
}

export interface Location {
  name: string;
  imgUrl: string;
  coordinates: Coordinates;
}

export const getFormatedName = (name: string) => {
  return name.toLowerCase().replace(/ /g, "-");
};
