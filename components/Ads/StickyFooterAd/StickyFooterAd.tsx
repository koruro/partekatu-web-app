import { useEffect } from "react";

interface Props {
  enabled?: boolean;
}

const StickyFooterAd: React.FC<Props> = ({ enabled }) => {
  useEffect(() => {
    try {
      if (enabled) {
        ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push(
          {}
        );
      }
    } catch (err) {}
  }, [enabled]);

  return (
    <div id="sticky-footer-ad" className="sticky-add">
      <section>
        <ins
          className="adsbygoogle"
          style={{ display: "inline-block", width: "320px", height: "50px" }}
          data-ad-client="ca-pub-8498524881106051"
          data-ad-slot="5254054503"
        ></ins>
      </section>
    </div>
  );
};

export default StickyFooterAd;
