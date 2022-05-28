import React from "react";
import { CategoriesEnum } from "../../../types/categories";
import CategoryBox from "../../Categories/CategoryBox/CategoryBox";
import styles from "./styles.module.css";

const BlankCard: React.FC = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: "white",
        borderRadius: "var(--rounded-s)",
        position: "relative",
      }}
      className="elevate-2"
    >
      {children}
    </div>
  );
};

export default BlankCard;

export const TaggedBlankCard: React.FC = ({ children }) => {
  return (
    <div style={{ position: "relative" }}>
      <div className={styles["blank-card__tag"]}>
        <CategoryBox category={CategoriesEnum.BLOG} />
      </div>
      <BlankCard>{children}</BlankCard>
    </div>
  );
};
