import React from "react";
import { CategoriesEnum } from "../../../types/categories";
import { CategoriesDict } from "../categories";
import CategoryBox from "../CategoryBox/CategoryBox";
import styles from "./styles.module.css";

interface Props {
	className?: string;
}

const CategoryList: React.FC<Props> = ({ className }) => {
	return (
		<div
			className={[styles["category-list-box"], "elevate-2", className].join(
				" "
			)}
		>
			{Object.keys(CategoriesDict).map((category) => (
				<a
					className={`${styles["category-list-item"]} hoverable-elevate`}
					key={category}
					href={`/categorias/${category}`}
				>
					<CategoryBox
						category={category as CategoriesEnum}
						hoverAnimation={true}
					/>
				</a>
			))}
		</div>
	);
};

export default CategoryList;
