import styles from "./styles.module.css";

const HomeLogoBox: React.FC = ({ children }) => {
  return <div className={styles["home-logo"]}>{children}</div>;
};

export default HomeLogoBox;
