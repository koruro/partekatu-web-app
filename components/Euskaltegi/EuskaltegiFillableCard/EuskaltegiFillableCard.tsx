import React from "react";
import { Euskaltegi } from "../../../models/euskaltegi/Euskaltegi";
import EuskaltegiCard from "../EuskaltegiCard/EuskaltegiCard";

interface Props {
  euskaltegi?: Euskaltegi;
}

const generateCard = (euskaltegi?: Euskaltegi) => {
  if (!euskaltegi)
    return (
      <div
        style={{
          minHeight: "310px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "4px solid var(--primary)",
          borderRadius: "var(--rounded-m)",
          borderStyle: "dashed",
          padding: "0 3rem",
        }}
      >
        <p
          style={{
            fontSize: "1.4rem",
            textAlign: "center",
            color: "var(--text-subtle)",
            lineHeight: "2.4rem",
          }}
        >
          Selecciona un euskaltegi en el mapa de arriba para ver su información
        </p>
      </div>
    );
  return <EuskaltegiCard euskaltegi={euskaltegi} />;
};

const EuskaltegiFillableCard: React.FC<Props> = ({ euskaltegi }) => {
  return (
    <div id="card" style={{ margin: "1rem" }}>
      {generateCard(euskaltegi)}
    </div>
  );
};

export default EuskaltegiFillableCard;
