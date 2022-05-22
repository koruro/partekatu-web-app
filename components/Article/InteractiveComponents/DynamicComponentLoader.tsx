import { useEffect, useState, createElement } from "react";
import { createPortal } from "react-dom";
import { ComponentDict } from "./ComponentDict";

const getInjectableComponents = () => {
  const elements: HTMLElement[] = [];

  // if (typeof window === "undefined") return elements;
  for (const key of Object.keys(ComponentDict)) {
    const container = document.getElementById(key);
    if (container) {
      elements.push(container);
    }
  }

  return elements;
};

const DynamicComponentLoader: React.FC = () => {
  const [components, setComponents] = useState<HTMLElement[]>([]);

  useEffect(() => {
    // Load injectable compoent with micro small delay to be able to fetch the div ids
    const timerId = setTimeout(
      () => setComponents(getInjectableComponents()),
      0
    );
    return () => clearTimeout(timerId);
  }, []);

  return (
    <>
      {components.map((element) => {
        return createPortal(
          createElement(ComponentDict[element.id].getComponent()),
          element
        );
      })}
    </>
  );
};

export default DynamicComponentLoader;
