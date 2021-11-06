import styles from "./styles.module.css";

const SideContainer: React.FC = ({ children }) => {
	return <section className={styles["side-container"]}>{children}</section>;
};

export default SideContainer;
