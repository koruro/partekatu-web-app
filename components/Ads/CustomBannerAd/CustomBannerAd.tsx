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
      <picture>
        <source
          media="(min-width: 768px)"
          srcSet="/promotions/aek_970X250.gif"
        />
        <img
          src="/promotions/aek_300X250.gif"
          alt="AEK Iragarkia"
          style={{ maxWidth: "100%" }}
        />
      </picture>
    </a>
  );
};

export default CustomBannerAd;
