import LazyHydrate from "react-lazy-hydration";
import RehypeReact from "./RehypeReact";

interface Props {
  content: string;
}

const ArticleContent: React.FC<Props> = ({ content }) => {
  return (
    <LazyHydrate whenVisible>
      <section className="article-content">
        <RehypeReact htmlContent={content} />
      </section>
    </LazyHydrate>
  );
};

export default ArticleContent;
