import { PropsWithChildren } from "react";
import OldPaperCard from "./OldPaperCard";

const OldPaperCardContainer: React.FC<PropsWithChildren> = ({ children }) => {
  return <OldPaperCard>{children}</OldPaperCard>;
};

export default OldPaperCardContainer;
