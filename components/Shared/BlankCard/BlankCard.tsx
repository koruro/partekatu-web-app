import React from "react";
import styles from "./styles.module.css";

interface BlankCardProps {
  className?: string;
  rounded?: "s" | "m" | "l";
}

const defaultClassName = "elevate-2";
const defaultRounded = "s";

const BlankCard: React.FC<BlankCardProps> = ({
  children,
  className,
  rounded,
}) => {
  return (
    <div
      style={{
        backgroundColor: "white",
        borderRadius: `var(--rounded-${rounded ?? defaultRounded})`,
        position: "relative",
        height: "100%",
      }}
      className={
        className ? [defaultClassName, className].join(" ") : defaultClassName
      }
    >
      {children}
    </div>
  );
};

export default BlankCard;

interface TaggedBlankCardProps extends BlankCardProps {
  renderTag?: () => JSX.Element;
}

export const TaggedBlankCard: React.FC<TaggedBlankCardProps> = ({
  children,
  renderTag,
  ...props
}) => {
  return (
    <div style={{ position: "relative" }}>
      {renderTag && (
        <div className={styles["blank-card__tag"]}>{renderTag()}</div>
      )}
      <BlankCard {...props}>{children}</BlankCard>
    </div>
  );
};
