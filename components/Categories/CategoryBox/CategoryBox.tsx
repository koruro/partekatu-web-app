import classNames from "classnames";
import { createElement } from "react";
import { CategoriesEnum } from "../../../types/categories";
import { CategoriesDict } from "../categories";
import styles from "./styles.module.css";

interface Props {
	category: CategoriesEnum;
	hoverAnimation?: boolean;
	as?: "h2" | "span";
}

const CategoryBox: React.FC<
	React.DetailedHTMLProps<
		React.HTMLAttributes<HTMLParagraphElement>,
		HTMLParagraphElement
	> &
		Props
> = ({ category, hoverAnimation, as, ...props }) => {
	return createElement(
		as ?? "span",
		{
			className: classNames(
				styles["category-box"],
				"button-padding-1",
				"elevate-1",
				styles[`category--${CategoriesDict[category].slug}`],
				{ [styles["category-box_hover"]]: hoverAnimation }
			),
		},
		CategoriesDict[category].text
	);
};

export default CategoryBox;
