import { useEffect } from "react";

interface Props {
	enabled?: boolean;
}

const SidebarAd: React.FC<Props> = ({ enabled }) => {
	useEffect(() => {
		try {
			if (enabled) {
				((window as any).adsbygoogle = (window as any).adsbygoogle || []).push(
					{}
				);
			}
		} catch (err) {}
	}, []);

	return (
		<div id="sidebar-ad" key="sidebar-ad" className="sidebar-ad">
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
