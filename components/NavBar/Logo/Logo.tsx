import Link from "next/link";

import PartekatuLogo from "../../Shared/PartekatuLogo";
import styles from "./styles.module.css";

const Logo = () => {
  return (
    <Link href={"/"} passHref className={styles["logo-box"]}>
      <PartekatuLogo />
    </Link>
  );
};

export default Logo;
