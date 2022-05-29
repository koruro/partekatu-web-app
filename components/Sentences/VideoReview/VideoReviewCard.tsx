import VideoReview from "./VideoReview";

const VideoReviewCard: React.FC = ({ children }) => {
  const title = (children as any[]).find((c) => c.type === "h2")?.props
    ?.children[0];
  const author = (children as any[]).find(
    (c) => c.props?.className === "author"
  )?.props?.children[0];
  const category = (children as any[]).find(
    (c) => c.props?.className === "category"
  )?.props?.children[0];
  const duration = (children as any[]).find(
    (c) => c.props?.className === "duration"
  )?.props?.children[0];
  const year = (children as any[]).find((c) => c.props?.className === "year")
    ?.props?.children[0];
  const imgUrl = (children as any[]).find((c) => c.type === "img")?.props?.src;
  const review = (children as any[])
    .filter((c) => c.type === "p")
    .map((c) => c?.props?.children);
  const viewUrl = (children as any[]).find(
    (c) => c.type === "a" && c.props?.className === "view-url"
  )?.props?.href;
  const reviewsUrl = (children as any[]).find(
    (c) => c.type === "a" && c.props?.className === "review-url"
  )?.props?.href;
  return (
    <VideoReview
      title={title}
      author={author}
      category={category}
      duration={duration}
      year={year}
      imgUrl={imgUrl}
      review={review}
      viewUrl={viewUrl}
      reviewUrl={reviewsUrl}
    ></VideoReview>
  );
};

export default VideoReviewCard;
