import { useRouter } from "next/router";
import React, { useEffect } from "react";

const ArticleListItemAd: React.FC = () => {
  const { asPath } = useRouter();

  useEffect(() => {
    try {
      if (typeof window !== "undefined") {
        ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push(
          {}
        );
      }
    } catch (err) {}
  }, [asPath]);
  return (
    <div
      key="article-list-item-ad"
      id="article-list-item-ad"
      style={{ display: "block", width: "100%" }}
    >
      <ins
        data-ad-slot="5681785441"
        className="adsbygoogle"
        style={{
          display: "block",
          textAlign: "center",
          height: "180px",
        }}
        data-ad-format="auto"
        data-full-width-responsive="true"
        data-ad-client="ca-pub-8498524881106051"
      ></ins>
    </div>
  );
};

export default ArticleListItemAd;
