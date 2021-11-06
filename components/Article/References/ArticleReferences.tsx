import React from "react";
import LazyHydrate from "react-lazy-hydration";
import ArticleSection from "../Section/ArticleSection";
import ArticleSectionHeader from "../Section/ArticleSectionHeader";
import styles from "./styles.module.css";

interface Props {
	references: string;
}
const ArticleReferences: React.FC<Props> = ({ references }) => {
	if (!references) return null;
	return (
		<LazyHydrate ssrOnly>
			<ArticleSection className={styles["article-references"]}>
				<ArticleSectionHeader id="references">Referencias</ArticleSectionHeader>
				<div dangerouslySetInnerHTML={{ __html: references }} />
			</ArticleSection>
		</LazyHydrate>
	);
};

export default ArticleReferences;
