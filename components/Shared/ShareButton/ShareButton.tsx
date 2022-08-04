import { PropsWithChildren } from "react";

interface Props {
  getPath: () => string;
  hoverEffect?: boolean;
  ariaLabel?: string;
}

const ShareButton: React.FC<PropsWithChildren<Props>> = ({
  getPath,
  children,
  hoverEffect,
  ariaLabel,
}) => {
  return (
    <a
      className={hoverEffect ? "hoverable-elevate" : undefined}
      href={getPath()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
};

export default ShareButton;
