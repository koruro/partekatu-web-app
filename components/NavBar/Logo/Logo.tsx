import React from "react";
import PartekatuLogo from "../../Shared/PartekatuLogo";
import styles from "./styles.module.css";

const Logo = () => {
	return (
		<a href="/" className={styles["logo-box"]}>
			<PartekatuLogo />
		</a>
	);
};

export default Logo;
