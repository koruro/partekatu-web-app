import classNames from "classnames";
import styles from "./styles.module.css";

interface Props {
	bullet_points: any[];
	infographic?: any;
}

const ArticleBullets: React.FC<Props> = ({ bullet_points, infographic }) => {
	if (!bullet_points) return null;

	return (
		<div className={`${styles["article-bullet-points"]} elevate-2`}>
			<div>
				<p>Indice</p>
				<ol
					className={styles["article-bullet-points__container"]}
					id="article-bullets"
				>
					{bullet_points.map((bullet, index) => (
						<li
							key={index}
							className={classNames(
								styles["article-bullet-points__bullet-container"],
								{
									[styles["article-bullet-points__bullet-container--faq"]]:
										bullet.isFaq,
								}
							)}
						>
							<a href={`#${bullet.targetId}`}>{bullet.name}</a>
						</li>
					))}
					{infographic && (
						<li
							className={`${styles["article-bullet-points__bullet-container"]} ${styles["article-bullet-points__bullet-container--infographic"]}`}
						>
							<a className="button-padding-1" href={`#infografia`}>
								Infografía
							</a>
						</li>
					)}
				</ol>
			</div>
		</div>
	);
};

export default ArticleBullets;
