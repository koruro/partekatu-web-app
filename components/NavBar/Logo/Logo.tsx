import Link from "next/link";

import PartekatuLogo from "../../Shared/PartekatuLogo";
import styles from "./styles.module.css";

const Logo = () => {
  return (
    <Link href={"/"}>
      <a className={styles["logo-box"]}>
        <PartekatuLogo />
      </a>
    </Link>
  );
};

export default Logo;
