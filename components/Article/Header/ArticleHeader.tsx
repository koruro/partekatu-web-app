import LazyHydrate from "react-lazy-hydration";
import ArticleAuthor from "../Author/ArticleAuthor";
import styles from "./styles.module.css";
import Image from "next/image";
import CategoryBox from "../../Categories/CategoryBox/CategoryBox";
import HeadingTitleAd from "../../Ads/HeadingTitleAd";

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
	emoji,
	preamble,
	title,
	altTitle,
	category,
	metaTitle,
	readingTime,
	slug,
}) => {
	return (
		<LazyHydrate ssrOnly>
			<header className={styles["article-header"]}>
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
				{preamble && <HeadingTitleAd />}
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
		</LazyHydrate>
	);
};

export default ArticleHeader;
