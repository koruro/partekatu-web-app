import classNames from "classnames";
import { createElement, CSSProperties, PropsWithChildren } from "react";

export interface TagBoxProps {
  className?: string;
  as?: "h2" | "span";
  style?: CSSProperties;
}

const TagBox: React.FC<PropsWithChildren<TagBoxProps>> = ({
  children,
  as,
  className,
  style,
}) => {
  return createElement(
    as ?? "span",
    {
      style: {
        textTransform: "capitalize",
        color: "white",
        background: "var(--primary-gradient)",
        margin: 0,
        fontSize: "1rem",
        fontWeight: "bold",
        borderRadius: "var(--rounded-l)",
        display: "inline-block",
        ...style,
      },
      className: classNames("button-padding-1", "elevate-1", className),
    },
    children
  );
};

export default TagBox;
