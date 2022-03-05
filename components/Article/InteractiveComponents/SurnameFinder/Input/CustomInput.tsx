import { useState } from "react";
import styles from "./styles.module.css";

interface Props {
	placeholder?: string;
	onValueChange?: (value: string) => void;
}

const CustomInput: React.FC<Props> = ({ onValueChange, placeholder }) => {
	const [value, setValue] = useState<string>("");
	return (
		<input
			className={styles["custom-input"]}
			placeholder={placeholder}
			value={value}
			onChange={(e) => {
				const value = e.target.value;
				if (onValueChange) onValueChange(value);
				setValue(value);
			}}
		></input>
	);
};

export default CustomInput;
