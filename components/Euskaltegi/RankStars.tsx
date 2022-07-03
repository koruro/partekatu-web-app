import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

interface Props {
  stars: number;
}
const color = "FFD600";
const RankStars: React.FC<Props> = ({ stars }) => {
  const abs = Math.floor(stars);

  return (
    <div style={{ fontSize: "1.1rem" }}>
      {[...Array(abs)].map((val, i) => (
        <FaStar key={i} color={color} />
      ))}
      {stars - abs > 0 && <FaStarHalfAlt color={color} />}
    </div>
  );
};

export default RankStars;
