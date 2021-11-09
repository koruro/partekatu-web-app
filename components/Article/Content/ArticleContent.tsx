import LazyHydrate from "react-lazy-hydration";
interface Props {
	content: string;
}

const ArticleContent: React.FC<Props> = ({ content }) => {
	return (
		<LazyHydrate ssrOnly>
			<section className="article-content">
				<div dangerouslySetInnerHTML={{ __html: content }} />
			</section>
		</LazyHydrate>
	);
};

export default ArticleContent;
