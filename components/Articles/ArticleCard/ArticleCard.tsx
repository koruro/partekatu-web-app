import Image from "next/image";
import classNames from "classnames";
import CategoryBox from "../../Categories/CategoryBox/CategoryBox";
import styles from "./styles.module.css";
import CardBase from "./CardBase";
import { getMinifiedImage } from "../../../utils/getMinifiedImage";

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
			<div
				className={classNames(
					styles["article-card"],
					"hoverable-elevate",
					"elevate-2",
					{
						[styles["article-card--large"]]: large,
					}
				)}
			>
				{category && (
					<CategoryBox
						className={styles["article-card__category"]}
						category={category.slug}
					/>
				)}
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
		</a>
	);
};

export default ArticleCard;
