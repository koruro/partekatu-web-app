import React, { useEffect } from "react";

const DisplayAd: React.FC = () => {
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
		<>
			<ins
				className="adsbygoogle"
				style={{ display: "block" }}
				data-ad-client="ca-pub-8498524881106051"
				data-ad-slot="6131034828"
				data-ad-format="auto"
				data-full-width-responsive="true"
			></ins>
		</>
	);
};

export default DisplayAd;
