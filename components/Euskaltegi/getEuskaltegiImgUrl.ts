import { Euskaltegi } from "../../models/euskaltegi/Euskaltegi";

export const getEuskaltegiImgUrl = (euskaltegi: Euskaltegi) =>
  `/euskaltegi/logos/${euskaltegi.imgUrl}.png`;
