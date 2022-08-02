import { Euskaltegi } from "../../models/euskaltegi/Euskaltegi";

export const getEuskaltegiImgUrl = (euskaltegi: Euskaltegi) =>
  `https://res.cloudinary.com/koruro/image/upload/Euskaltegi/${euskaltegi.imgUrl}.png`;
