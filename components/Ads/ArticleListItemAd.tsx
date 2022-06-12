import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { TaggedBlankCard } from "../Shared/BlankCard/BlankCard";
import TagBox from "../Shared/TagBox/TagBox";

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
    <TaggedBlankCard renderTag={() => <TagBox>Anuncio</TagBox>}>
      <div
        key="article-list-item-ad"
        id="article-list-item-ad"
        style={{
          display: "block",
          width: "100%",
          minHeight: "50px",
          maxHeight: "180px",
        }}
      >
        <ins
          data-ad-slot="5681785441"
          className="adsbygoogle"
          style={{
            display: "block",
            textAlign: "center",
            minHeight: "50px",
            height: "180px",
            maxHeight: "180px",
          }}
          data-ad-client="ca-pub-8498524881106051"
        ></ins>
      </div>
    </TaggedBlankCard>
  );
};

export default ArticleListItemAd;
