import classNames from "classnames";
import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  PropsWithChildren,
} from "react";
import styles from "./styles.module.css";

interface Props {
  enable: boolean;
  isLoading: boolean;
}

const SubscribeLoadingButton: React.FC<
  PropsWithChildren<
    Props &
      DetailedHTMLProps<
        ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
      >
  >
> = ({ isLoading, enable, ...props }) => {
  return (
    <button
      className={classNames(
        styles["subscribe-loading-button"],
        "button-padding-1",
        {
          [`${styles["subscribe-loading-button--disabled"]}`]:
            isLoading || !enable,
          ["hoverable-elevate"]: enable,
        }
      )}
      disabled={isLoading || !enable}
      type="submit"
      {...props}
    >
      {isLoading ? "Cargando" : "Adelante"}
    </button>
  );
};

export default SubscribeLoadingButton;
