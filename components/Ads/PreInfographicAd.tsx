import { useRouter } from "next/router";
import { useEffect } from "react";

const PreInfographicAd = () => {
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
      key="pre-infographic-ad"
      id="pre-infographic-ad"
      style={{
        minHeight: "150px",
      }}
    >
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
        data-ad-slot="5135901637"
      ></ins>
    </div>
  );
};

export default PreInfographicAd;
