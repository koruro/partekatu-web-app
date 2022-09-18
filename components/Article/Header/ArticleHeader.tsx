import LazyHydrate from "react-lazy-hydration";
import ArticleAuthor from "../Author/ArticleAuthor";
import styles from "./styles.module.css";
import Image from "next/image";
import CategoryBox from "../../Categories/CategoryBox/CategoryBox";
import HeadingTitleAd from "../../Ads/HeadingTitleAd";
import CustomBannerAd from "../../Ads/CustomBannerAd/CustomBannerAd";

interface Props {
  title: string;
  preamble: string;
  altTitle?: string;
  banner: string;
  emoji: string;
  category: any;
  slug?: string;
  metaTitle?: string;
  readingTime?: number;
}

const ArticleHeader: React.FC<Props> = ({
  banner,
  preamble,
  title,
  altTitle,
  category,
  metaTitle,
  readingTime,
}) => {
  return (
    <header className={styles["article-header"]}>
      <LazyHydrate ssrOnly>
        <>
          <h1 className={styles["article-header__title"]}>{title}</h1>
          <div className={styles["article-header__info"]}>
            <a
              href={`/categorias/${category.slug}`}
              className="hoverable-elevate"
            >
              <CategoryBox
                className={styles["article-header__category"]}
                category={category.slug}
              />
            </a>
            <ArticleAuthor author="Partekatu" readingTime={readingTime} />
          </div>
        </>
      </LazyHydrate>
      <CustomBannerAd />
      {preamble && (
        <p className={styles["article-header__preamble"]}>{preamble}</p>
      )}
      <div className={styles["article-header__banner-image"]}>
        <Image
          title={metaTitle}
          alt={altTitle}
          src={banner}
          objectFit="cover"
          layout="fill"
          priority
        />
      </div>
    </header>
  );
};

export default ArticleHeader;
