import React, { useEffect } from "react";
import { useMediaQuery } from "../../hooks/useMediaQuery";

const InArticleAd: React.FC = () => {
	useEffect(() => {
		try {
			((window as any).adsbygoogle = (window as any).adsbygoogle || []).push(
				{}
			);
		} catch (err) {
			console.log(err);
		}
	}, []);

	const isPageWide = useMediaQuery(`(min-width: 728px)`);

	if (isPageWide) return null;

	return (
		<div id="ezoic-pub-ad-placeholder-114">
			<script
				async
				src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8498524881106051"
				crossOrigin="anonymous"
			></script>
			<ins
				className="adsbygoogle"
				style={{
					display: "block",
					textAlign: "center",
				}}
				data-ad-layout="in-article"
				data-ad-format="fluid"
				data-ad-client="ca-pub-8498524881106051"
				data-ad-slot="5826552535"
			></ins>
		</div>
	);
};

export default InArticleAd;
