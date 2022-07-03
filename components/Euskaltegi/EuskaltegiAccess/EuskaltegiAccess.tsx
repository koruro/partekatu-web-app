import React from "react";
import { EuskaltegiAccess as EuskaltegiAccessEnum } from "../../../models/euskaltegi/Euskaltegi";

interface Props {
  access: EuskaltegiAccessEnum;
}

const accessColor: Record<EuskaltegiAccessEnum, string> = {
  PRIVATE: "#FE994F",
  PUBLIC: "var(--blog-c1)",
};
const EuskaltegiAccess: React.FC<Props> = ({ access }) => {
  return (
    <span style={{ color: accessColor[access] }}>
      {access === EuskaltegiAccessEnum.PRIVATE ? "Privado" : "Público"}
    </span>
  );
};

export default EuskaltegiAccess;
