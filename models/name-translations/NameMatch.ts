export enum NameOrigin {
  Vasque = "es-pv",
  Spanish = "es",
}

export enum Gender {
  Male = "male",
  Female = "female",
}

export interface NameMatch {
  name: string;
  similarity: number;
}

export interface NameTranslationData {
  name: string;
  gender: Gender;
  origin: NameOrigin;
  translations: { name: string; origin: NameOrigin }[];
}

export interface NameTranslationDataError {
  inputName: string;
  error: string;
}

export type NameTranslationDataResponse =
  | NameTranslationData
  | NameTranslationDataError;

export const isNameTranslationDataError = (
  val: NameTranslationDataResponse
): val is NameTranslationDataError =>
  (val as NameTranslationDataError).error !== undefined;

export const getNameOriginText = (origin: NameOrigin) =>
  origin === NameOrigin.Spanish ? "castellano" : "euskera";

export const getOriginAbreviation = (origin: NameOrigin) =>
  origin === NameOrigin.Spanish ? "es" : "eu";
