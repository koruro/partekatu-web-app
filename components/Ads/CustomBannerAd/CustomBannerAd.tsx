/* eslint-disable @next/next/no-img-element */
import styles from "./styles.module.css";

const CustomBannerAd = () => {
  return (
    <a
      href="https://aek.eus/es-es/bidelaguna"
      target="__blank"
      rel="noopener noreferrer"
      className={styles["custom-banner-ad"]}
      id="aek-banner"
    >
      <picture style={{ width: "100%" }}>
        <source
          media="(min-width: 520px)"
          srcSet="/promotions/aek_970X250.gif"
        />
        <img
          src="/promotions/aek_300X250.gif"
          alt="AEK Iragarkia"
          style={{ width: "100%" }}
        />
      </picture>
    </a>
  );
};

export default CustomBannerAd;
