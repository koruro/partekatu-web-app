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
        style={{ display: "block" }}
        data-ad-format="fluid"
        data-ad-layout-key="-63+c5-t-4i+pg"
        data-ad-client="ca-pub-8498524881106051"
        data-ad-slot="6522710932"
      ></ins>
    </div>
  );
};

export default ArticleListItemAd;
