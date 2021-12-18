import { unified } from "unified";
import rehypeFormat from "rehype-format";
import remarkParse from "remark-parse";
import remarkMath from "remark-math";
import remarkRehype from "remark-rehype";
import rehypeKatex from "rehype-katex";
import rehypeStringify from "rehype-stringify";
import rehypeRaw from "rehype-raw";
import rehypeMinify from "rehype-preset-minify";
import rehypeAutoLink from "rehype-autolink-headings";
import { BulletPoint } from "../models/BulletPoint";

const wrap = require("rehype-wrap-all");

function htmlElementsTransformer(options = {}) {
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

function deleteHeadingsId() {
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

function addHeadingAd() {
	return transformer;
	function transformer(tree: any, file: any) {
		findHeading(tree.children);
	}

	function findHeading(children: any[]) {
		if (!children) return;
		if (children.length === 0) return;

		let h2Counter = 0;
		let h2Index = -1;
		for (let i = 0; i < children.length; i++) {
			const element = children[i];
			if (isH2(element)) {
				h2Counter++;
			}

			// If two h2 elements are found, inject div before it
			if (h2Counter >= 2) {
				h2Index = i;

				children.splice(h2Index, 0, {
					type: "element",
					tagName: "div",
					properties: { id: "secondaryArticleAd" },
					children: [],
				});
				return;
			}
		}
	}

	function isH2(element: any) {
		return element.type === "heading" && element.depth === 2;
	}
}

export class ArticleMarkdownParser {
	private parser = () => {
		return unified().use(remarkParse).use(remarkMath);
	};
	private processor = () => {
		return (unified() as any)
			.use(remarkRehype, { allowDangerousHtml: true })
			.use(rehypeRaw)
			.use(addHeadingAd)
			.use(rehypeFormat)
			.use(wrap, { selector: "table", wrapper: "div.table-container" })
			.use(htmlElementsTransformer)
			.use(rehypeAutoLink, {
				behavior: "before",
				properties: { isHeadingLink: "true" },
			})
			.use(deleteHeadingsId)
			.use(rehypeKatex)
			.use(rehypeMinify);
	};
	private compiler = () => {
		return unified().use(rehypeStringify, {
			quoteSmart: true,
			closeSelfClosing: true,
		});
	};

	private tree: any;
	private parsedTree: any;
	private html?: string;

	constructor(content: string) {
		this.tree = this.parser().parse(content);
	}

	public async parse() {
		this.parsedTree = await this.processor().run(this.tree);
	}

	public getRawHtml() {
		if (this.html) return this.html;
		const result = this.compiler().stringify(this.parsedTree);

		this.html = String(result);

		return this.html;
	}

	public getBulletPoints(bullets?: BulletPoint[]) {
		const _bullets: BulletPoint[] = [];
		let nameIndex = 0;
		this.parsedTree.children.forEach((element: any, index: number) => {
			if (!element.properties) return;
			if (!element.properties.isHeadingLink) return;

			const targetId = element.properties?.id;
			const name = bullets
				? bullets[nameIndex]?.name
				: this.parsedTree.children[index + 1]?.children[0]?.value;

			const isFaq = bullets ? bullets[nameIndex]?.isFaq ?? false : false;
			if (!targetId) return;

			_bullets.push({
				targetId,
				name: name ?? this.parsedTree.children[index + 1]?.children[0]?.value,
				isFaq: isFaq ?? false,
			});
			nameIndex++;
		});

		return _bullets;
	}
}
