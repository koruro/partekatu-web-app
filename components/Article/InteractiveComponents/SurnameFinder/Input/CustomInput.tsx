import classNames from "classnames";
import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { FaSearch } from "react-icons/fa";
import styles from "./styles.module.css";

interface Props {
  onValueChange?: (value: string) => void;
}

const CustomInput: React.FC<
  Props &
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
> = ({ onValueChange, ...props }) => {
  return (
    <div className={classNames(styles["custom-input"], "elevate-1")}>
      <input
        style={{ minHeight: "32px" }}
        onChange={(e) => {
          const value = e.target.value;
          if (onValueChange) onValueChange(value);
        }}
        {...props}
      ></input>
      <button className={styles["search-button"]} type="submit">
        <FaSearch />
      </button>
    </div>
  );
};

export default CustomInput;
