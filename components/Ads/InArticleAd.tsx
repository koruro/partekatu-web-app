import React, { useEffect } from "react";

const InArticleAd: React.FC = () => {
	useEffect(() => {
		try {
			if (typeof window !== "undefined") {
				((window as any).adsbygoogle = (window as any).adsbygoogle || []).push(
					{}
				);
			}
		} catch (err) {}
	}, []);
	return (
		<div id="ezoic-pub-ad-placeholder-113">
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
				data-full-width-responsive="true"
				data-ad-client="ca-pub-8498524881106051"
				data-ad-slot="8906244116"
			></ins>
		</div>
	);
};

export default InArticleAd;
