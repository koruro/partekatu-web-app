import { createElement } from "react";
import classNames from "classnames";
import styles from "./styles.module.css";

const OnlineCourse: React.FC<{ as?: "h2" | "span" }> = ({ as = "span" }) => {
  return createElement(
    as,
    {},
    <a
      className={classNames(
        styles["online-course-button"],
        "button-padding-1",
        "elevate-1"
      )}
      href={"/curso-euskera-online"}
      id="online-course-button"
    >
      Curso Online
    </a>
  );
};

export default OnlineCourse;
