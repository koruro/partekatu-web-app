import { PropsWithChildren } from "react";
import styles from "./styles.module.css";

const HomeLogoBox: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className={styles["home-logo"]}>{children}</div>;
};

export default HomeLogoBox;
