import React from "react";
import styles from "./styles.module.css";

const FlexCenterBox: React.FC = ({ children }) => {
	return <div className={styles.container}>{children}</div>;
};

export default FlexCenterBox;
