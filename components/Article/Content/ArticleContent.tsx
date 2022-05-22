import LazyHydrate from "react-lazy-hydration";
import RehypeReact from "./RehypeReact";

const dynamicArticleSlugs = ["adivinanzas-en-euskera"];

interface Props {
  content: string;
  slug?: string;
}

const renderContentSection = (content: string) => (
  <section className="article-content">
    <RehypeReact htmlContent={content} />
  </section>
);

const ArticleContent: React.FC<Props> = ({ content, slug }) => {
  if (slug && dynamicArticleSlugs.includes(slug)) {
    return renderContentSection(content);
  }
  return <LazyHydrate ssrOnly>{renderContentSection(content)}</LazyHydrate>;
};

export default ArticleContent;
