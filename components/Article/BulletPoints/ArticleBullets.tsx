import classNames from "classnames";
import styles from "./styles.module.css";

interface Props {
  bullet_points: any[];
  infographic?: any;
}

const getBullets = (bulletPoints: any[]) => {
  if (!bulletPoints) return null;
  if (bulletPoints.length === 0) return null;

  return bulletPoints;
};

const ArticleBullets: React.FC<Props> = ({ bullet_points, infographic }) => {
  const bullets = getBullets(bullet_points);

  if (!bullets && !infographic) return null;

  return (
    <div className={`${styles["article-bullet-points"]} elevate-2`}>
      <div>
        <p>Indice</p>
        <ol
          className={styles["article-bullet-points__container"]}
          id="article-bullets"
        >
          {bullets &&
            bullets.map((bullet, index) => (
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
                <a
                  className={classNames({
                    ["button-padding-1"]: bullet.isFaq,
                  })}
                  href={`#${bullet.targetId}`}
                >
                  {bullet.name}
                </a>
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
