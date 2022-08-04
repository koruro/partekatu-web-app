import { PropsWithChildren } from "react";

interface Props {
  onClick: () => any;
  hoverEffect?: boolean;
  ariaLabel?: string;
}

const DownloadButton: React.FC<PropsWithChildren<Props>> = ({
  onClick,
  children,
  hoverEffect,
  ariaLabel,
}) => {
  return (
    <button
      className={hoverEffect ? "hoverable-elevate" : undefined}
      onClick={onClick}
      aria-label={ariaLabel}
      style={{ cursor: "pointer", background: "none", border: "none" }}
    >
      {children}
    </button>
  );
};

export default DownloadButton;
