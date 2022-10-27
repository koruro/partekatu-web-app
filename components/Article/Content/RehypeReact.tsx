import { createElement, Fragment } from "react";
import rehypeReact from "rehype-react";
import { unified } from "unified";
import rehypeParse from "rehype-parse";
import TranslatedSentenceCard from "../../Sentences/TranslatedSentence/TranslatedSentenceCard";
import PoemCard from "../../Sentences/Poem/PoemCard";
import RiddleCard from "../../Sentences/Riddle/RiddleCard";
import VideoReviewCard from "../../Sentences/VideoReview/VideoReviewCard";
import SongReviewCard from "../../Sentences/SongReview/SongReviewCard";
import NameInfoCardContainer from "../../Sentences/NameInfoCard/NameInfoCardContainer";
import OldPaperCard from "../../Sentences/OldPaperCard/OldPaperCard";
import ReferalProductCardContainer from "../../Sentences/ReferalProductCard/ReferalProductCardContainer";

interface Props {
  htmlContent: string;
}

const getNodeProps = (
  node: any
): React.ClassAttributes<HTMLElement> & { [key: string]: any } => {
  return {
    id: node.id,
    className: node.className,
    style: node.style,
  };
};

const createCustomElement = (
  factory: (props: any, children: any[], node: any) => JSX.Element
) => {
  return (node: any) => {
    const props = getNodeProps(node);

    return factory(props, node.children, node);
  };
};

const RehypeReact: React.FC<Props> = ({ htmlContent }) => {
  let translatedSIndex = Math.floor(Math.random() * 256);

  const incrementIndex = () => {
    translatedSIndex++;
  };

  const processor = unified()
    .use(rehypeParse, { fragment: true })
    .use(rehypeReact, {
      createElement,
      Fragment,
      components: {
        div: createCustomElement((props, children) => {
          if (props.className === "translated-sentence") {
            incrementIndex();
            return createElement(
              TranslatedSentenceCard,
              { index: translatedSIndex },
              children
            );
          }
          if (props.className === "poem") {
            incrementIndex();
            return createElement(
              PoemCard,
              { index: translatedSIndex },
              children
            );
          }
          if (props.className === "riddle") {
            incrementIndex();
            return createElement(
              RiddleCard,
              { index: translatedSIndex },
              children
            );
          }
          if (props.className === "video-review") {
            incrementIndex();
            return createElement(VideoReviewCard, {}, children);
          }
          if (props.className === "song-review") {
            incrementIndex();
            return createElement(SongReviewCard, {}, children);
          }
          if (props.className === "name-info-card") {
            incrementIndex();
            return createElement(
              NameInfoCardContainer,
              { index: translatedSIndex },
              children
            );
          }
          if (props.className === "old-paper") {
            return createElement(OldPaperCard, {}, children);
          }
          if (props.className === "referal-product") {
            return createElement(ReferalProductCardContainer, {}, children);
          }
          return createElement("div", { ...props }, children);
        }),
      },
      passNode: true,
    });

  const processed = processor.processSync(htmlContent);

  return processed.result;
};

export default RehypeReact;
