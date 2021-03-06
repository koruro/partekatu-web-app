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
    <div
      key="articles-heading-ad"
      id="articles-heading-ad"
      style={{ display: "block", width: "100%" }}
    >
      <ins
        data-ad-slot="6787602106"
        className="adsbygoogle"
        style={{
          display: "block",
          textAlign: "center",
        }}
        data-ad-format="auto"
        data-full-width-responsive="true"
        data-ad-client="ca-pub-8498524881106051"
      ></ins>
    </div>
  );
};

export default ArticlesContainerHeadingAd;
