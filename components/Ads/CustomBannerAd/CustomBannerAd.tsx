/* eslint-disable @next/next/no-img-element */
import styles from "./styles.module.css";

const CustomBannerAd = () => {
  return (
    <a
      href="https://www.aek.eus/es-es/blog-1/en-marcha-la-prematricula-del-proximo-curso-oferta-especial"
      target="__blank"
      rel="noopener noreferrer"
      className={styles["custom-banner-ad"]}
    >
      <picture>
        <source
          media="(min-width: 768px)"
          srcSet="https://res.cloudinary.com/koruro/image/upload/v1655318038/Banners/10_Aurematri_970X250_elebi_xvdgyr.gif"
        />
        <img
          src="https://res.cloudinary.com/koruro/image/upload/Banners/11_Aurematri_300X250_elebi_ljvcho.gif"
          alt="Dream Team"
        />
      </picture>
    </a>
  );
};

export default CustomBannerAd;
