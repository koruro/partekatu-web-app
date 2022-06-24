import classNames from "classnames";
import styles from "./styles.module.css";

const OnlineCourse = () => {
  return (
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
