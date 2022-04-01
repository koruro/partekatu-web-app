import dynamic from "next/dynamic";
import { ComponentType } from "react";

export const ComponentDict: {
	[key: string]: {
		getComponent: () => ComponentType<{}>;
	};
} = {
	"surname-finder": {
		getComponent: () => dynamic(() => import("./SurnameFinder/SurnameFinder")),
	},
};
