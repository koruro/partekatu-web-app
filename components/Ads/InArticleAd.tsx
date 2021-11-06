import React, { useEffect } from "react";

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
	return (
		<div>
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
