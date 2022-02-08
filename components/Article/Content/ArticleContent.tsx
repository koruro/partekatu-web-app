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
		// <LazyHydrate ssrOnly>
		<section className="article-content">
			<TranslatedSentence>
				<p>Atzera begiratzeak ez omen du ezertarako balio.</p>
				<span>Mirar atras no debe servir de nada.</span>
			</TranslatedSentence>
			<RehypeReact htmlContent={content} />
			{/* <div dangerouslySetInnerHTML={{ __html: content }} /> */}
			{/* <ReactMarkdown
					remarkPlugins={[remarkMath]}
					rehypePlugins={[
						rehypeRaw,
						addHeadingAd,
						rehypeFormat,
						[wrap, { selector: "table", wrapper: "div.table-container" }],
						htmlElementsTransformer,
						[
							rehypeAutolinkHeadings,
							{
								behavior: "before",
								properties: { isHeadingLink: "true" },
							},
						],
						deleteHeadingsId,
						rehypeKatex,
					]}
					components={{
						div: (props) => {
							return React.createElement(OnlineCourse);
							return React.createElement(
								"div",
								{ id: props.id, className: props.className },
								props.children
							);
						},
					}}
				>
					{content}
				</ReactMarkdown> */}
		</section>
		// </LazyHydrate>
	);
};

export default ArticleContent;
