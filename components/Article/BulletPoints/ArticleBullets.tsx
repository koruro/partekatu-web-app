import classNames from "classnames";
import { useRouter } from "next/router";
import InfographicButton from "../Infographic/InfographicButton";
import styles from "./styles.module.css";

interface Props {
	bullet_points: any[];
	infographic?: any;
}

const ArticleBullets: React.FC<Props> = ({ bullet_points, infographic }) => {
	const { asPath } = useRouter();

	if (!bullet_points) return null;

	return (
		<>
			{infographic && <InfographicButton />}
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
				{/* <div>
					<p>Compartir</p>
					<div className={styles["side-share__icons"]}>
						<a
							href={getFacebookShareLink(asPath)}
							target="_blank"
							rel="noopener noreferer"
							aria-label="share with Facebook"
						>
							<FaFacebookF />
						</a>
						<a
							href={getTwitterShareLink(asPath, "")}
							target="_blank"
							rel="noopener noreferer"
							aria-label="share with Twitter"
						>
							<FaTwitter />
						</a>
					</div>
				</div> */}
			</div>
		</>
	);
};

export default ArticleBullets;
