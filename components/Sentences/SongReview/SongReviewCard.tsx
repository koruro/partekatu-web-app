import { PropsWithChildren } from "react";
import SongReview from "./SongReview";

const SongReviewCard: React.FC<PropsWithChildren> = ({ children }) => {
  const title = (children as any[]).find(
    (c) => c.type === "h2" || c.type === "h3"
  )?.props?.children[0];
  const author = (children as any[]).find(
    (c) => c.props?.className === "author"
  )?.props?.children[0];
  const category = (children as any[]).find(
    (c) => c.props?.className === "category"
  )?.props?.children[0];

  const video = (children as any[]).find((c) => c.type === "iframe")?.props;
  const review = (children as any[])
    .filter((c) => c.type === "p")
    .map((c) => c?.props?.children);

  const spanishChorus = (children as any[])
    .filter((c) => c.props?.className === "spanish-chorus")
    .map((c) => c?.props?.children)
    .flat()
    .filter((c) => c.type === "p")
    .map((c) => c.props.children)
    .flat();
  const vasqueChorus = (children as any[])
    .filter((c) => c.props?.className === "euskera-chorus")
    .map((c) => c?.props?.children)
    .flat()
    .filter((c) => c.type === "p")
    .map((c) => c.props.children)
    .flat();

  return (
    <SongReview
      title={title}
      author={author}
      category={category}
      video={video}
      review={review}
      spanishChorus={spanishChorus ?? []}
      vasqueChorus={vasqueChorus ?? []}
    ></SongReview>
  );
};

export default SongReviewCard;
