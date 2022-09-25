import { Locale } from "./LocaleData";

export const serializeLocale = (locale: Locale) => {
  return {
    locale: locale.locale,
  };
};

export const deserializeLocale = (
  locale: ReturnType<typeof serializeLocale>
): Locale => {
  return Locale.create({ locale: locale.locale });
};
