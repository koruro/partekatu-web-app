import Image from "next/image";
import classNames from "classnames";
import CategoryBox from "../../Categories/CategoryBox/CategoryBox";
import styles from "./styles.module.css";
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

const MinimalArticleCard: React.FC<Props> = ({
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
				<span className={styles["article-card__emoji"]}>{emoji}</span>
				<span className={styles["article-card__title"]}>{title}</span>
			</div>
		</a>
	);
};

export default MinimalArticleCard;
