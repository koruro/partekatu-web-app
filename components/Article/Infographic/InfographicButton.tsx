import React from "react";
import { FaImage } from "@react-icons/all-files/fa/FaImage";
import styles from "./styles.module.css";

interface Props {}
const InfographicButton: React.FC<Props> = () => {
	return (
		<a
			className={styles["article-infographic__anchor-button"]}
			href={`#infografia`}
		>
			<FaImage></FaImage>
		</a>
	);
};

export default InfographicButton;
