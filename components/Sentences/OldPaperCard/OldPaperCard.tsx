import { PropsWithChildren } from "react";
import styles from "./styles.module.css";

const OldPaperCard: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className={styles["old-paper"]}>{children}</div>;
};

export default OldPaperCard;
