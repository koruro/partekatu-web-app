import React from "react";
import { CategoriesDict } from "../../components/Categories/categories";
import PageContainerBox from "../../components/Page/PageContainerBox/PageContainerBox";
import Button from "../../components/Shared/Buttons/ButtonLink";
import styles from "./styles.module.css";
import { Category } from "../../models/Category";
import { Article } from "../../models/Article";
import HomeArticleList from "../../components/Articles/HomeArticleList/HomeArticlesList";
import { CategoriesEnum } from "../../types/categories";

interface Props {
	category: Category;
	newArticles: Article[];
	highlightedArticles: Article[];
}

const CategoryContainer: React.FC<Props> = ({
	category,
	newArticles,
	highlightedArticles,
}) => {
	return (
		<PageContainerBox breakLimit="xl">
			<div className={styles["category-container"]}>
				<h1
					className={
						styles[
							`category-container__title__underline--${
								CategoriesDict[category.slug as CategoriesEnum].slug
							}`
						]
					}
				>
					{CategoriesDict[category.slug as CategoriesEnum].text}
				</h1>
				<div
					className={styles["category-container__description"]}
					dangerouslySetInnerHTML={{ __html: category.description ?? "" }}
				/>
				<HomeArticleList
					newArticles={newArticles}
					highlightedArticles={highlightedArticles}
				/>
				<Button
					href={`/articulos?cat=${category.slug}&p=0`}
					className={styles["category-container__button"]}
					style={{ marginTop: "5rem" }}
				>
					Ver más artículos
				</Button>
			</div>
		</PageContainerBox>
	);
};

export default CategoryContainer;
