import { NameOrigin } from "../../../../models/name-translations/NameMatch";

export const switchOrigin = (currentOrigin: NameOrigin) =>
  currentOrigin === NameOrigin.Spanish ? NameOrigin.Vasque : NameOrigin.Spanish;

export const getFlagFromOrigin = (origin: NameOrigin, width = 34) => {
  const url =
    origin === NameOrigin.Spanish
      ? `https://cdn-icons-png.flaticon.com/512/197/197593.png`
      : `https://cdn-icons-png.flaticon.com/512/197/197517.png`;

  return <img width={width} src={url} />;
};
