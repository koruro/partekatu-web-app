import { useRouter } from "next/router";
import { useEffect } from "react";

const SidebarAd: React.FC = () => {
	const { asPath } = useRouter();

	useEffect(() => {
		try {
			if (typeof window !== "undefined") {
				((window as any).adsbygoogle = (window as any).adsbygoogle || []).push(
					{}
				);
				console.log("sidebar loaded");
			}
		} catch (err) {}
	}, [asPath]);
	return (
		<div id="sidebar-ad" key="sidebar-ad">
			<script
				async
				src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8498524881106051"
				crossOrigin="anonymous"
			></script>
			<ins
				className="adsbygoogle"
				style={{ display: "block" }}
				data-ad-client="ca-pub-8498524881106051"
				data-ad-slot="6131034828"
				data-ad-format="auto"
				data-full-width-responsive="true"
			></ins>
		</div>
	);
};

export default SidebarAd;
