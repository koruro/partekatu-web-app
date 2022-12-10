import { PropsWithChildren } from "react";
import SongReview from "./SongReview";

const getChorus = (children: any[], className: string) => {
  return (children as any[])
    .filter((c) => c.props?.className === className)
    .map((c) => c?.props?.children)
    .flat()
    .filter((c) => c.type === "p")
    .map((c) => c.props.children)
    .flat();
};

const SongReviewCard: React.FC<PropsWithChildren> = ({ children }) => {
  const anchorLink = (children as any[]).find(
    (c) => c.props?.isheadinglink === "true"
  );
  const titleElement = (children as any[]).find(
    (c) => c.type === "h2" || c.type === "h3"
  );
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

  const spanishChorus = getChorus(children as any[], "spanish-chorus");
  const vasqueChorus = getChorus(children as any[], "euskera-chorus");

  return (
    <SongReview
      anchorLink={anchorLink}
      title={titleElement}
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
