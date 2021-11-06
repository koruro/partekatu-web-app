import React from "react";
import Skeleton from "react-loading-skeleton";
import styles from "./styles.module.css";

const ArticleSkeletonCard = () => {
	return (
		<div className={styles["article-skeleton-card"]}>
			<Skeleton style={{ height: "100%" }} width={500} />
		</div>
	);
};

export default ArticleSkeletonCard;
