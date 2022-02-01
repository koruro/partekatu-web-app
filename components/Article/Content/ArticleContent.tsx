import React from "react";
import LazyHydrate from "react-lazy-hydration";
import ReactMarkdown from "react-markdown";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeFormat from "rehype-format";
import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw";
import remarkMath from "remark-math";
import {
	addHeadingAd,
	deleteHeadingsId,
	htmlElementsTransformer,
} from "../../../utils/unifiedPlugins";
import OnlineCourse from "../../Categories/OnlineCourse/OnlineCourse";
const wrap = require("rehype-wrap-all");
interface Props {
	content: string;
}

const ArticleContent: React.FC<Props> = ({ content }) => {
	return (
		<LazyHydrate ssrOnly>
			<section className="article-content">
				{/* <div dangerouslySetInnerHTML={{ __html: content }} /> */}
				<ReactMarkdown
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
				</ReactMarkdown>
			</section>
		</LazyHydrate>
	);
};

export default ArticleContent;
