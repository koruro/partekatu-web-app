export function deleteHeadingsId() {
  return transformer;
  function transformer(tree: any) {
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
        const id = element.properties.href.substring(1);
        element.properties.id = id;
      }

      // Delete ids
      if (element.tagName === "h2") {
        delete element.properties.id;
      }

      parseChildren(element.children);
    }
  }
}
