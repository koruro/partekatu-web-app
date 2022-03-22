import { useRouter } from "next/router";
import { useEffect } from "react";
import { useMediaQuery } from "../../../hooks/useMediaQuery";

const StickyFooterAd: React.FC = () => {
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

	const isPageWide = useMediaQuery(`(min-width: 728px)`);

	if (isPageWide) return null;

	return (
		<div id="sticky-footer-ad" key="sticky-footer-ad" className="sticky-add">
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
