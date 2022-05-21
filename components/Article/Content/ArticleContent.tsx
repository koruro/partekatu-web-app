import RehypeReact from "./RehypeReact";

interface Props {
  content: string;
}

const ArticleContent: React.FC<Props> = ({ content }) => {
  return (
    <section className="article-content">
      <RehypeReact htmlContent={content} />
    </section>
  );
};

export default ArticleContent;
