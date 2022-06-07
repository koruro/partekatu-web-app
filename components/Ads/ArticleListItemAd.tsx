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
    <div key="article-list-item-ad" id="article-list-item-ad">
      <ins
        className="adsbygoogle"
        style={{ display: "block", height: "300px" }}
        data-ad-client="ca-pub-8498524881106051"
        data-ad-slot="5681785441"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
};

export default ArticleListItemAd;