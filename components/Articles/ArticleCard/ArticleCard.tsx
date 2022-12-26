import Image from "next/image";
import classNames from "classnames";
import CategoryBox from "../../Categories/CategoryBox/CategoryBox";
import styles from "./styles.module.css";
import { getMinifiedImage } from "../../../utils/getMinifiedImage";
import { TaggedBlankCard } from "../../Shared/BlankCard/BlankCard";
import React from "react";

interface Props {
  slug: string;
  title: string;
  altTitle?: string;
  description: string;
  category: any;
  banner: string;
  emoji: string;
  large?: boolean;
  titleAs?: "h2" | "h3" | "span";
}

const ArticleCard: React.FC<Props> = ({
  banner,
  category,
  emoji,
  title,
  altTitle,
  description,
  slug,
  large,
  titleAs = "span",
}) => {
  return (
    <a href={`/${slug}`}>
      <TaggedBlankCard
        expand
        className="hoverable-elevate"
        renderTag={() => <CategoryBox category={category.slug} />}
      >
        <div
          className={classNames(styles["article-card"], {
            [styles["article-card--large"]]: large,
          })}
        >
          <div className={styles["article-card__image"]}>
            <Image
              title={title}
              alt={altTitle}
              src={large ? banner : getMinifiedImage(banner)}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className={styles["article-card__info"]}>
            <div className={styles["article-card__info__title"]}>
              {emoji} {React.createElement(titleAs, {}, title)}
            </div>
            <p>{description}</p>
          </div>
        </div>
      </TaggedBlankCard>
    </a>
  );
};

export default ArticleCard;
