import { CategoriesEnum } from "../../../types/categories";
import { CategoriesDict } from "../categories";
import CategoryBox from "../CategoryBox/CategoryBox";
import styles from "./styles.module.css";

interface Props {
	className?: string;
	categoryAs?: "h2" | "span";
}

const CategoryList: React.FC<Props> = ({ className, categoryAs }) => {
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
						as={categoryAs ?? "span"}
						category={category as CategoriesEnum}
						hoverAnimation={true}
					/>
				</a>
			))}
		</div>
	);
};

export default CategoryList;
