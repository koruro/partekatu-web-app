import Image from "next/image";
import classNames from "classnames";
import CategoryBox from "../../Categories/CategoryBox/CategoryBox";
import styles from "./styles.module.css";
import { getMinifiedImage } from "../../../utils/getMinifiedImage";
import { TaggedBlankCard } from "../../Shared/BlankCard/BlankCard";

interface Props {
  slug: string;
  title: string;
  altTitle?: string;
  description: string;
  category: any;
  banner: string;
  emoji: string;
  large?: boolean;
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
}) => {
  return (
    <a href={`/${slug}`}>
      <TaggedBlankCard
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
            <span className={styles["article-card__info__title"]}>
              {emoji} {title}
            </span>
            <p>{description}</p>
          </div>
        </div>
      </TaggedBlankCard>
    </a>
  );
};

export default ArticleCard;
