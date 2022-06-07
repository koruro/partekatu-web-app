import { useRouter } from "next/router";
import { useEffect } from "react";

const ArticlesContainerHeadingAd: React.FC = () => {
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
    <div key="articles-heading-ad" id="articles-heading-ad">
      <ins
        className="adsbygoogle"
        style={{
          display: "block",
          textAlign: "center",
        }}
        data-ad-client="ca-pub-8498524881106051"
        data-ad-slot="6787602106"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
};

export default ArticlesContainerHeadingAd;
