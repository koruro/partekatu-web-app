import { PropsWithChildren } from "react";
import styles from "./styles.module.css";

interface Props {
  index?: number;
  imgSource?: string;
}

const NameInfoCard: React.FC<PropsWithChildren<Props>> = ({ children }) => {
  return <div className={styles["name-info-card"]}>{children}</div>;
};

export default NameInfoCard;
