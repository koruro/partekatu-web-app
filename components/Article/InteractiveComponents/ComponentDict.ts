import { ComponentType } from "react";

export const ComponentDict: {
	[key: string]: {
		getComponent: () => ComponentType<{}>;
	};
} = {};
