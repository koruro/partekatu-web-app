export function addSecondaryArticleAd() {
  return transformer;
  function transformer(tree: any) {
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

      // If four h2 elements are found, inject div before it
      if (h2Counter >= 4) {
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
    return (
      (element.type === "heading" && element.depth === 2) ||
      element.tagName === "h2"
    );
  }
}
