import styles from "./styles.module.css";

const NavItems: React.FC = () => {
  return (
    <div className={styles["nav-items"]}>
      <a className="button-padding-1" href={"/articulos"}>
        Artículos
      </a>
    </div>
  );
};

export default NavItems;
