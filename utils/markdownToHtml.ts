import { Processor, unified } from "unified";
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
import {
	addHeadingAd,
	deleteHeadingsId,
	htmlElementsTransformer,
	HtmlElementsTransformerOptions,
} from "./unifiedPlugins";

interface RehypeProcessorsOptions {
	htmlElementTransformer?: HtmlElementsTransformerOptions;
}

const wrap = require("rehype-wrap-all");

const getRemarkProcessors = () => {
	return [remarkMath];
};
const getRehypeProcessors = (options?: RehypeProcessorsOptions) => {
	return [
		[remarkRehype, { allowDangerousHtml: true }],
		rehypeRaw,
		rehypeFormat,
		[wrap, { selector: "table", wrapper: "div.table-container" }],
		[htmlElementsTransformer, { ...options?.htmlElementTransformer }],
		[
			rehypeAutoLink,
			{
				behavior: "before",
				properties: { isHeadingLink: "true" },
			},
		],
		deleteHeadingsId,
		rehypeKatex,
	];
};

export class ArticleMarkdownParser {
	private parser = () => {
		const mainParser = unified().use(remarkParse);
		const processors = getRemarkProcessors();

		return processors.reduce((acc: Processor<any, any, any, void>, curr) => {
			if (Array.isArray(curr)) {
				return acc.use(curr[0], curr[1]);
			}
			return acc.use(curr);
		}, mainParser);
	};
	private processor = (options?: RehypeProcessorsOptions) => {
		const processors = getRehypeProcessors(options);

		return processors.reduce((acc: Processor<any, any, any, void>, curr) => {
			if (Array.isArray(curr)) {
				return acc.use(curr[0], curr[1]);
			}
			return acc.use(curr);
		}, unified());
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

	public async parse(options?: RehypeProcessorsOptions) {
		this.parsedTree = await this.processor(options).run(this.tree);
	}

	public getRawHtml() {
		if (this.html) return this.html;
		const result = this.compiler().stringify(this.parsedTree);

		this.html = String(result);

		return this.html;
	}

	public getParsedTree() {
		return this.parsedTree;
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
