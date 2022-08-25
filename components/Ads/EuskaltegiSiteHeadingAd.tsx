import { useRouter } from "next/router";
import React, { useEffect } from "react";

const EuskaltegiSiteHeadingAd: React.FC = () => {
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
    <div key="heading-euskaltegi-site-ad" id="heading-euskaltegi-site-ad">
      <ins
        className="adsbygoogle"
        style={{
          display: "block",
        }}
        data-ad-format="auto"
        data-full-width-responsive="true"
        data-ad-client="ca-pub-8498524881106051"
        data-ad-slot="7258577022"
      ></ins>
    </div>
  );
};

export default EuskaltegiSiteHeadingAd;
