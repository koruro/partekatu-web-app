import { useEffect, useState } from "react";
import { useMediaQuery } from "../../../hooks/useMediaQuery";
import breakpoints from "../../../styles/breakpoints";

const StickyFooterAd: React.FC = () => {
	useEffect(() => {
		try {
			if (typeof window !== "undefined") {
				((window as any).adsbygoogle = (window as any).adsbygoogle || []).push(
					{}
				);
			}
		} catch (err) {}
	}, []);

	const isPageWide = useMediaQuery(`(min-width: 728px)`);

	if (isPageWide) return null;

	return (
		<div className="sticky-add">
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
