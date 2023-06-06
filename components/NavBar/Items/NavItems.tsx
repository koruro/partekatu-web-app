import MyCourse from "../../Shared/MyCourseButton/MyCourse";
import styles from "./styles.module.css";

const NavItems: React.FC = () => {
  return (
    <div className={styles["nav-items"]}>
      <a
        className={["button-padding-1", styles["nav-link"]].join(" ")}
        href={"/articulos"}
      >
        Artículos
      </a>
      <MyCourse />
    </div>
  );
};

export default NavItems;
