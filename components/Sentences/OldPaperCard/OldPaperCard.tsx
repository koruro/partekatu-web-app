import { PropsWithChildren } from "react";
import styles from "./styles.module.css";

const OldPaperCard: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <div className={styles["old-paper"]}>
        <div className={styles["old-paper__parchment"]} id="parchment"></div>
        <section className={styles["old-paper__contain"]} id="contain">
          {children}
        </section>
      </div>
      <svg style={{ display: "none" }}>
        <filter id="wavy2">
          <feTurbulence
            x="0"
            y="0"
            baseFrequency="0.02"
            numOctaves="5"
            seed="1"
          />
          <feDisplacementMap in="SourceGraphic" scale="20" />
        </filter>
      </svg>
    </div>
  );
};

export default OldPaperCard;
