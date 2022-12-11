import { TaggedBlankCard } from "../../Shared/BlankCard/BlankCard";
import TagBox from "../../Shared/TagBox/TagBox";
import styles from "./styles.module.css";

interface Props {
  anchorLink: JSX.Element;
  title: JSX.Element;
  author?: string;
  video: { src: string; alt: string; title: string };
  category?: string;
  review: string[];
  spanishChorus?: string[];
  vasqueChorus?: string[];
}

const SongReview: React.FC<Props> = ({
  anchorLink,
  title,
  author,
  video,
  category,
  review,
  spanishChorus,
  vasqueChorus,
}) => {
  return (
    <TaggedBlankCard
      className={styles["song-review"]}
      rounded="l"
      renderTag={category ? () => <TagBox>{category}</TagBox> : undefined}
    >
      {anchorLink}
      {title}
      {author && (
        <span className={styles["song-review__author"]}>{author}</span>
      )}
      <div className={styles["song-review__corpus"]}>
        <div style={{ position: "relative", paddingTop: "56.25%" }}>
          {video && (
            <iframe
              style={{
                height: "100%",
                width: "100%",
                position: "absolute",
                top: 0,
                left: 0,
              }}
              src={video.src}
              title={video.title}
              loading="lazy"
              allowFullScreen
            />
          )}
        </div>
        <section>
          {review.map((r, i) => (
            <p key={i}>{r}</p>
          ))}
        </section>
      </div>
      {vasqueChorus &&
        vasqueChorus.length > 0 &&
        spanishChorus &&
        spanishChorus.length > 0 && (
          <div className={styles["song-review__choruses"]}>
            <div style={{ fontStyle: "italic" }}>
              {vasqueChorus.map((sen, i) => (
                <p key={i}>{sen}</p>
              ))}
            </div>
            <div>
              {spanishChorus.map((sen, i) => (
                <p key={i}>{sen}</p>
              ))}
            </div>
          </div>
        )}
    </TaggedBlankCard>
  );
};

export default SongReview;
