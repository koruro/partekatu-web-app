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
				<img src="https://images.unsplash.com/photo-1644091578502-9131622d68b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"></img>
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
