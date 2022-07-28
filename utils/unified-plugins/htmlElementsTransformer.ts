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

      // Add target blank to anchor tangs
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
        let slug = element.children[0].value
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
