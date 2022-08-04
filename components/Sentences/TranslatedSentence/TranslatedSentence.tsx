import { PropsWithChildren } from "react";
import styles from "./styles.module.css";

interface Props {
  index?: number;
  imgSource?: string;
}

const TranslatedSentence: React.FC<PropsWithChildren<Props>> = ({
  children,
}) => {
  return <div className={styles["translated-sentence"]}>{children}</div>;
};

export default TranslatedSentence;
