import { PropsWithChildren } from "react";
import styles from "./styles.module.css";

const Poem: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className={styles["poem"]}>{children}</div>;
};

export default Poem;
