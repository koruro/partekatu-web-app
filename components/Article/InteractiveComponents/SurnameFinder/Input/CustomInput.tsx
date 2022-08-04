import classNames from "classnames";
import { FaSearch } from "react-icons/fa";
import styles from "./styles.module.css";

interface Props {
  value: string;
  placeholder?: string;
  onValueChange?: (value: string) => void;
  onBlur?: () => void;
  onFocus?: () => void;
}

const CustomInput: React.FC<Props> = ({
  onValueChange,
  placeholder,
  value,
  onBlur,
  onFocus,
}) => {
  return (
    <div className={classNames(styles["custom-input"], "elevate-1")}>
      <input
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          const value = e.target.value;
          if (onValueChange) onValueChange(value);
        }}
        onBlur={onBlur}
        onFocus={onFocus}
      ></input>
      <button className={styles["search-button"]} type="submit">
        <FaSearch />
      </button>
    </div>
  );
};

export default CustomInput;
