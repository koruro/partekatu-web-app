import { PropsWithChildren } from "react";
import styles from "./styles.module.css";

const SideContainer: React.FC<PropsWithChildren> = ({ children }) => {
  return <section className={styles["side-container"]}>{children}</section>;
};

export default SideContainer;
