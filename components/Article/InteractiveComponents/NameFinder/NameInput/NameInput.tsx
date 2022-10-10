import classNames from "classnames";
import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { TbArrowsLeftRight } from "react-icons/tb";
import { NameOrigin } from "../../../../../models/name-translations/NameMatch";
import { getFlagFromOrigin, switchOrigin } from "../utils";
import styles from "./styles.module.css";

interface Props {
  onValueChange?: (value: string) => void;
  origin: NameOrigin;
  onSwitch: (origin: NameOrigin) => void;
}

const NameInput: React.FC<
  Props &
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
> = ({ onValueChange, onSwitch, origin, ...props }) => {
  return (
    <div className={classNames(styles["custom-input"], "elevate-1")}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: ".2rem",
          borderRadius: "var(--rounded-l)",
          padding: ".4rem .6rem",
          background: "var(--primary-light-2)",
        }}
      >
        {getFlagFromOrigin(origin, 26)}
        <button
          type="button"
          style={{
            backgroundColor: "transparent",
            border: "none",
            display: "flex",
            alignItems: "center",
          }}
          onClick={() => onSwitch(origin)}
        >
          <TbArrowsLeftRight color="var(--text)" size={18} />
        </button>
        {getFlagFromOrigin(switchOrigin(origin), 26)}
      </div>
      <input
        style={{ minHeight: "32px" }}
        onChange={(e) => {
          const value = e.target.value;
          if (onValueChange) onValueChange(value);
        }}
        {...props}
      ></input>
    </div>
  );
};

export default NameInput;
