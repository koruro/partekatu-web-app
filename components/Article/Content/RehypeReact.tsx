import { createElement, Fragment } from "react";
import rehypeReact from "rehype-react";
import { unified } from "unified";
import rehypeParse from "rehype-parse";
import TranslatedSentence from "../../Sentences/TranslatedSentence";

interface Props {
	htmlContent: string;
}

const getNodeProps = (
	node: any
): React.ClassAttributes<HTMLElement> & { [key: string]: any } => {
	return {
		id: node.id,
		className: node.className,
		style: node.style,
	};
};

const createCustomElement = (
	factory: (props: any, children: any[], node: any) => JSX.Element
) => {
	return (node: any) => {
		const props = getNodeProps(node);

		return factory(props, node.children, node);
	};
};

const RehypeReact: React.FC<Props> = ({ htmlContent }) => {
	let translatedSIndex = 0;

	const incrementIndex = () => {
		translatedSIndex++;
	};

	const processor = unified()
		.use(rehypeParse, { fragment: true })
		.use(rehypeReact, {
			createElement,
			Fragment,
			components: {
				div: createCustomElement((props, children) => {
					if (props.className === "translated-sentence") {
						incrementIndex();
						return createElement(
							TranslatedSentence,
							{ index: translatedSIndex },
							children
						);
					}
					return createElement("div", { ...props }, children);
				}),
			},
			passNode: true,
		});

	const processed = processor.processSync(htmlContent);

	return processed.result;
};

export default RehypeReact;
