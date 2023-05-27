import React from "react";
import { FaUserAlt as UserIcon } from "react-icons/fa";
import styles from "./style.module.css";

const MyCourse = () => {
  return (
    <a
      href="https://curso.partekatu.com/cuenta/"
      target="__blank"
      className={["button-padding-1", styles["my-course-button"]].join(" ")}
    >
      <UserIcon size="14px" />
      <span>Mi curso</span>
    </a>
  );
};

export default MyCourse;
