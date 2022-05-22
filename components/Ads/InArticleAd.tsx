import { useRouter } from "next/router";
import React, { useEffect } from "react";

const InArticleAd: React.FC = () => {
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
    <div key="in-article-ad" id="in-article-ad">
      <ins
        className="adsbygoogle"
        style={{
          display: "block",
          textAlign: "center",
        }}
        data-ad-layout="in-article"
        data-ad-format="fluid"
        data-full-width-responsive="true"
        data-ad-client="ca-pub-8498524881106051"
        data-ad-slot="8906244116"
      ></ins>
    </div>
  );
};

export default InArticleAd;
