import React from "react";
import { CategoriesEnum } from "../../../types/categories";
import { CategoriesDict } from "../categories";
import styles from "./styles.module.css";

interface Props {
	category: CategoriesEnum;
	hoverAnimation?: boolean;
}

const CategoryBox: React.FC<
	React.DetailedHTMLProps<
		React.HTMLAttributes<HTMLParagraphElement>,
		HTMLParagraphElement
	> &
		Props
> = ({ category, hoverAnimation, ...props }) => {
	return (
		<p
			className={`${styles["category-box"]} button-padding-1 elevate-1 ${
				styles[`category--${CategoriesDict[category].slug}`]
			} ${props.className ?? ""} ${
				hoverAnimation ? styles["category-box_hover"] : ""
			}`}
		>
			{CategoriesDict[category].text}
		</p>
	);
};

export default CategoryBox;
