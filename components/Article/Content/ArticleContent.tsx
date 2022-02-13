import React, { Fragment, createElement } from "react";
import LazyHydrate from "react-lazy-hydration";
import TranslatedSentence from "../../Sentences/TranslatedSentence";
import RehypeReact from "./RehypeReact";
const wrap = require("rehype-wrap-all");
interface Props {
	content: string;
}

const ArticleContent: React.FC<Props> = ({ content }) => {
	return (
		<LazyHydrate ssrOnly>
			<section className="article-content">
				<RehypeReact htmlContent={content} />
			</section>
		</LazyHydrate>
	);
};

export default ArticleContent;
