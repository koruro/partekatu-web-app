import React, { PropsWithChildren } from "react";
import SentenceContainer from "../SentenceContainer";
import NameInfoCard from "./NameInfoCard";

interface Props {
  index: number;
}

const NameInfoCardContainer: React.FC<PropsWithChildren<Props>> = ({
  index,
  children,
}) => {
  return (
    <SentenceContainer index={index}>
      <NameInfoCard>{children}</NameInfoCard>
    </SentenceContainer>
  );
};

export default NameInfoCardContainer;
