import { useEffect } from "react";
import CategoryList from "../../Categories/CategoryList/CategoryList";
import styles from "./styles.module.css";

interface Props {
  onClose: any;
  isOpenned: boolean;
}

const SideBar: React.FC<Props> = ({ onClose, isOpenned }) => {
  // Block or unblock scroll depending on if its open or not
  useEffect(() => {
    document.body.style.overflow = isOpenned ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpenned]);

  return (
    <>
      <div
        className={`${[styles["side-bar"], styles["side-bar--closed"]].join(
          " "
        )} ${isOpenned && styles["side-bar--openned"]}`}
      >
        <div className={styles["side-bar__content"]}>
          <CategoryList inColumn />
        </div>
      </div>
      <div
        className={`${styles["side-bar__background"]} ${
          isOpenned && styles["side-bar__background--openned"]
        }`}
        onClick={onClose}
      />
    </>
  );
};

export default SideBar;
