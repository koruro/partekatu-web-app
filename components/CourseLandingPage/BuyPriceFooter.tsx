import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";

interface Props {
  onCTAClick: () => any;
}
export function BuyPriceFooter({ onCTAClick }: Props) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const showClasses =
    scrollPosition > 300 ? [styles["buy-price-footer--show"]] : [];

  return (
    <footer className={[styles["buy-price-footer"], ...showClasses].join(" ")}>
      <div className={styles["buy-price-footer__container"]}>
        <div className={styles["buy-price-footer__price"]}>
          <span>€</span>
          <span className={styles["buy-price-footer__price__ammount"]}>
            24,99
          </span>
        </div>
        <a
          href="https://curso.partekatu.com/step/curso-euskera-basico/"
          onClick={onCTAClick}
          target="__blank"
          rel="noopener noreferrer"
          className={[
            styles["basic-course-lp__button"],
            "hoverable-elevate",
            "button-padding-2",
          ].join(" ")}
          id="curso-euskera-desde-0-footer"
        >
          Únete ahora 🎉
        </a>
      </div>
    </footer>
  );
}
