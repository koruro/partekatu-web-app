import React from "react";
import styles from "./styles.module.css";

interface Props {
	as: any;
}

const ArticleTitle: React.FC<
	Props &
		React.DetailedHTMLProps<
			React.HTMLAttributes<HTMLDivElement>,
			HTMLDivElement
		>
> = ({ children, as, ...props }) => {
	props = {
		...props,
		className: [styles["article-header__title"], props.className].join(" "),
	};
	return React.createElement(as, props, children);
};

export default ArticleTitle;
