import React from "react";
import styles from "./styles.module.css";

const StickyContainer: React.FC = ({ children }) => {
	return <div className={styles["side-container__inner"]}>{children}</div>;
};

export default StickyContainer;
