/* eslint-disable @next/next/no-img-element */
import { NameOrigin } from "../../../../models/name-translations/NameMatch";

export const switchOrigin = (currentOrigin: NameOrigin) =>
  currentOrigin === NameOrigin.Spanish ? NameOrigin.Vasque : NameOrigin.Spanish;

export const getFlagFromOrigin = (origin: NameOrigin, width = 34) => {
  const img =
    origin === NameOrigin.Spanish ? (
      <img width={width} src={"/flags/spain.png"} alt="spanish-flag" />
    ) : (
      <img width={width} src={"/flags/basque-country.png"} alt="basque-flag" />
    );

  return img;
};
