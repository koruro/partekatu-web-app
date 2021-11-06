import dynamic from "next/dynamic";
import { ComponentType } from "react";

export const ComponentDict: {
	[key: string]: {
		getComponent: () => ComponentType<{}>;
	};
} = {
	oppositionCalculator: {
		getComponent: () => dynamic(() => import("./Calculator/Calculator")),
	},
	articleAd: {
		getComponent: () => dynamic(() => import("../../Ads/InArticleAd")),
	},
};
