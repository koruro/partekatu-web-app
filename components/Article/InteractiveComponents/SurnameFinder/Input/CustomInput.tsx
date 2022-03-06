import { useState } from "react";
import styles from "./styles.module.css";

interface Props {
	value: string;
	placeholder?: string;
	onValueChange?: (value: string) => void;
}

const CustomInput: React.FC<Props> = ({
	onValueChange,
	placeholder,
	value,
}) => {
	return (
		<input
			className={styles["custom-input"]}
			placeholder={placeholder}
			value={value}
			onChange={(e) => {
				const value = e.target.value;
				if (onValueChange) onValueChange(value);
			}}
		></input>
	);
};

export default CustomInput;
