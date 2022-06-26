import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

interface Props {
  stars: number;
}
const color = "FFD600";
const RankStars: React.FC<Props> = ({ stars }) => {
  const abs = Math.floor(stars);

  return (
    <div>
      {[...Array(abs)].map((val) => (
        <FaStar key={val} color={color} />
      ))}
      {stars - abs > 0 && <FaStarHalfAlt color={color} />}
    </div>
  );
};

export default RankStars;
