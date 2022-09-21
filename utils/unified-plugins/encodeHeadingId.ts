import { capitalize } from "../capitalize";

export const encodeHeadingId = (text: string) =>
  text
    .toLowerCase()
    .replace(/[\?¿!¡]/gm, "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[{()}]/g, "")
    .replace(/\W/g, "-");

export const decodeHeadingId = (id: string) =>
  capitalize(id.replace(/-/gm, " "));
