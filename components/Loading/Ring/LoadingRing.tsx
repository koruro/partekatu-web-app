import React from "react";
import styles from "./styles.module.css";

const LoadingRing: React.FC = () => {
	return (
		<div className={styles["loading-container"]}>
			<div className={styles["lds-ellipsis"]}>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	);
};

export default LoadingRing;
