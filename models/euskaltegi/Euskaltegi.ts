export enum EuskaltegiAccess {
  PUBLIC = "PUBLIC",
  PRIVATE = "PRIVATE",
}

export interface Coordinates {
  lat: number;
  long: number;
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
}
