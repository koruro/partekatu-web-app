import { PropsWithChildren } from "react";

const PaginationBox: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className="pagination-box button-padding-1">{children}</div>;
};

export default PaginationBox;
