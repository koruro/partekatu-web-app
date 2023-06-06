import React from "react";
import styles from "./styles.module.css";
import LogoDotComSVG from "../Shared/LogoDotCom";
import PageContainerBox from "../Page/PageContainerBox/PageContainerBox";

export function InstructorInfo() {
  return (
    <section className={styles["instructor-info"]}>
      <PageContainerBox breakLimit="lg">
        <div className={styles["instructor-info__instructor"]}>
          <span>Con la confianza de</span>
          <LogoDotComSVG />
        </div>
        <p>
          La web de referencia para aprender euskera, con más de 50.000 usuarios
          al mes
        </p>
      </PageContainerBox>
    </section>
  );
}
