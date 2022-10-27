import React, { Children, PropsWithChildren } from "react";
import { FaAmazon } from "react-icons/fa";
import BlankCard from "../../Shared/BlankCard/BlankCard";
import styles from "./styles.module.css";

const ReferalProductCardContainer: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const childrenArr = Children.toArray(children);
  const img = recursiveChildrenFind(
    childrenArr,
    (el: any) => el.type === "img"
  );
  const title = recursiveChildrenFind(
    childrenArr,
    (el: any) => el.type === "h3"
  )?.props.children[0];

  const referalUrl = recursiveChildrenFind(
    childrenArr,
    (el: any) => el.props.className === "amazon-referal"
  )?.props.href;

  if (!img) return null;

  return <ReferalProductCard img={img} referalUrl={referalUrl} title={title} />;
};

interface Props {
  img: JSX.Element;
  referalUrl: string;
  title?: string;
}

const ReferalProductCard: React.FC<Props> = ({ img, referalUrl, title }) => {
  return (
    <BlankCard rounded="l" className={styles["referal-container"]}>
      {title && <h3>{title}</h3>}
      <div className={styles["referal-container__image"]}>{img}</div>
      <a
        target="_blank"
        href={referalUrl}
        rel="noopener noreferrer sponsored"
        className={styles["amazon-referal-button"]}
      >
        <FaAmazon size={20} color={"#cc7218"} />
        Ver en Amazon
      </a>
    </BlankCard>
  );
};

export default ReferalProductCardContainer;

function recursiveChildrenFind(
  children: (
    | string
    | number
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
    | React.ReactPortal
  )[],
  fn: (children: any) => boolean
):
  | React.ReactElement<any, string | React.JSXElementConstructor<any>>
  | undefined {
  for (const child of children) {
    const found = findChild(child, fn);
    if (found) return found;
  }
  return;
}

function findChild(child: any, fn: (children: any) => boolean) {
  if (!React.isValidElement(child as any)) {
    return;
  }
  const c = child as React.ReactElement<
    PropsWithChildren,
    string | React.JSXElementConstructor<any>
  >;
  if (fn(c)) return c;

  if (c.props.children) {
    return recursiveChildrenFind(Children.toArray(c.props.children), fn);
  }
}
