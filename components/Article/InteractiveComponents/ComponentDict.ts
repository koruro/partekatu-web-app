import dynamic from "next/dynamic";
import { ComponentType } from "react";

export const ComponentDict: {
	[key: string]: {
		getComponent: () => ComponentType<{}>;
	};
} = {
	articleAd: {
		getComponent: () => dynamic(() => import("../../Ads/InArticleAd")),
	},
};
