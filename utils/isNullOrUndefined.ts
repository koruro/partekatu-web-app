export const isNullOrUndefined = (value: any): value is undefined | null =>
  value === null || value === undefined;
