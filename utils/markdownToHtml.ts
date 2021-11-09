import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkMath from "remark-math";
import remarkRehype from "remark-rehype";
import rehypeKatex from "rehype-katex";
import rehypeStringify from "rehype-stringify";
import rehypeFormat from "rehype-format";
import rehypeRaw from "rehype-raw";
import rehypeMinify from "rehype-preset-minify";
import rehypeAutoLink from "rehype-autolink-headings";

const wrap = require("rehype-wrap-all");

function htmlElementsTransformer(options = {}): any {
	return transformer;

	function transformer(tree: any, file: any) {
		parseChildren(tree.children);
	}

	function parseChildren(children: any[]) {
		if (!children) return;
		if (children.length === 0) return;

		for (let i = 0; i < children.length; i++) {
			const element = children[i];

			if (!element) continue;
			if (element.type !== "element") continue;

			// Add lazy loading to imgs
			if (element.tagName === "img") {
				element.properties = {
					...element.properties,
					loading: "lazy",
					decoding: "async",
				};
			}

			// Add target blanc to anchor tangs
			if (element.tagName === "a") {
				element.properties = {
					...element.properties,
					target: "_blank",
					rel: "noopener noreferrer",
				};
			}

			// Add id slug to h2
			if (element.tagName === "h2") {
				//Remove question marks
				var slug = element.children[0].value
					.toLowerCase()
					.replace(/[\?¿!¡]/gm, "");

				//Remove tildes
				slug = slug.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

				// Remove parenthesis
				slug = slug.replace(/[{()}]/g, "");

				//Remove every other symbol
				slug = slug.replace(/\W/g, "-");
				element.properties = {
					...element.properties,
					id: slug,
				};
			}

			parseChildren(element.children);
		}
	}
}

function deleteHeadingsId(): any {
	return transformer;
	function transformer(tree: any, file: any) {
		parseChildren(tree.children);
	}

	function parseChildren(children: any[]) {
		if (!children) return;
		if (children.length === 0) return;

		for (let i = 0; i < children.length; i++) {
			const element = children[i];

			if (!element) continue;
			if (element.type !== "element") continue;

			// Delete ids
			if (element.tagName === "a") {
				element.properties.id = element.properties.href.substring(1);
			}

			// Delete ids
			if (element.tagName === "h2") {
				delete element.properties.id;
			}

			parseChildren(element.children);
		}
	}
}

export const baseProcessor = () => {
	return unified()
		.use(remarkParse)
		.use(remarkMath)
		.use(remarkRehype, { allowDangerousHtml: true })
		.use(rehypeRaw)
		.use(rehypeFormat)
		.use(wrap, { selector: "table", wrapper: "div.table-container" })
		.use(htmlElementsTransformer)
		.use(rehypeAutoLink)
		.use(deleteHeadingsId)
		.use(rehypeKatex)
		.use(rehypeMinify)
		.use(rehypeStringify, {
			quoteSmart: true,
			closeSelfClosing: true,
		});
};

export const markdownToHtml = async (markdown: string) => {
	const result = await baseProcessor().process(markdown);

	return String(result);
};
