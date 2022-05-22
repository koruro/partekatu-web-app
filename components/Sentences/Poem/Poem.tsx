import styles from "./styles.module.css";

const Poem: React.FC = ({ children }) => {
  return <div className={styles["poem"]}>{children}</div>;
};

export default Poem;
