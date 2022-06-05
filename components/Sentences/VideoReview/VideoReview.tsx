import { TaggedBlankCard } from "../../Shared/BlankCard/BlankCard";
import TagBox from "../../Shared/TagBox/TagBox";
import styles from "./styles.module.css";

interface Props {
  title: string;
  author: string;
  year: string;
  duration: string;
  img: { src: string; alt: string; title: string };
  category: string;
  review: string[];
  viewUrl?: string;
  reviewUrl?: string;
}

const VideoReview: React.FC<Props> = ({
  title,
  author,
  year,
  duration,
  img,
  category,
  review,
  viewUrl,
  reviewUrl,
}) => {
  return (
    <TaggedBlankCard
      className={styles["video-review"]}
      rounded="l"
      renderTag={() => <TagBox>{category}</TagBox>}
    >
      <h3>{title}</h3>
      <span className={styles["video-review__author"]}>{author}</span>
      <div className={styles["video-review__corpus"]}>
        {img && (
          <img
            src={img.src}
            alt={img.alt}
            title={img.title}
            loading="lazy"
            decoding="async"
          />
        )}

        <section>
          {review.map((r, i) => (
            <p key={i}>{r}</p>
          ))}
        </section>
      </div>
      <div className={styles["video-review__footer"]}>
        <div className={styles["video-review__info"]}>
          <span>{year}</span>
          <span>{duration}</span>
        </div>
        <div className={styles["video-review__links"]}>
          {viewUrl && (
            <a
              href={viewUrl}
              rel="noopener noreferrer nofollow"
              target="__blank"
            >
              Ver online
            </a>
          )}
          {reviewUrl && (
            <a
              href={reviewUrl}
              rel="noopener noreferrer nofollow"
              target="__blank"
            >
              Ver opiniones
            </a>
          )}
        </div>
      </div>
    </TaggedBlankCard>
  );
};

export default VideoReview;
