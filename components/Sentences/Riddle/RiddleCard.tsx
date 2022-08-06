import React, { PropsWithChildren } from "react";
import SentenceContainer from "../SentenceContainer";
import Riddle from "./Riddle";

interface Props {
  index: number;
}

const RiddleCard: React.FC<PropsWithChildren<Props>> = ({
  index,
  children,
}) => {
  const riddle = (children as JSX.Element[])
    .filter((el) => el.type === "p")
    .map((el) => el.props.children);

  const solution = (children as any[]).find((el) => el.type === "span")?.props
    .children;

  return (
    <SentenceContainer showTears index={index}>
      <Riddle riddle={riddle} solution={solution} />
    </SentenceContainer>
  );
};

export default RiddleCard;
