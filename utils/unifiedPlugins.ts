export interface HtmlElementsTransformerOptions {
	anchor?: {
		aditionalRel?: string[];
		useNoRefNoOp?: boolean;
	};
}

export const DEFAULT_HTML_TRANSFORMER_OPTIONS: HtmlElementsTransformerOptions =
	{
		anchor: {
			aditionalRel: [],
			useNoRefNoOp: true,
		},
	};

export function htmlElementsTransformer(
	options?: HtmlElementsTransformerOptions
) {
	const _options: Required<HtmlElementsTransformerOptions> = {
		anchor: Object.assign(
			{},
			DEFAULT_HTML_TRANSFORMER_OPTIONS.anchor,
			options?.anchor
		),
	};

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
				const previousRels: string[] = element?.properties?.rel ?? [];
				const noOpNoRefRels = _options.anchor.useNoRefNoOp
					? ["noopener", "noreferrer"]
					: [];
				const aditionalRels = _options.anchor.aditionalRel ?? [];

				element.properties = {
					...element.properties,
					target: "_blank",
					rel: [...previousRels, ...noOpNoRefRels, ...aditionalRels],
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

export function deleteHeadingsId() {
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

export function addHeadingAd() {
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
