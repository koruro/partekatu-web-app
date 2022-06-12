import classNames from "classnames";
import { createElement } from "react";

export interface TagBoxProps {
  className?: string;
  as?: "h2" | "span";
}

const TagBox: React.FC<TagBoxProps> = ({
  children,
  as,
  className,
  ...props
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
        // width: "fit-content",
      },
      className: classNames("button-padding-1", "elevate-1", className),
      ...props,
    },
    children
  );
};

export default TagBox;
