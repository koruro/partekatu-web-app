import dynamic from "next/dynamic";
import { ComponentType } from "react";

export const ComponentDict: {
  [key: string]: {
    getComponent: () => ComponentType<any>;
  };
} = {
  "surname-finder": {
    getComponent: () => dynamic(() => import("./SurnameFinder/SurnameFinder")),
  },
  articleAd: {
    getComponent: () => dynamic(() => import("../../Ads/InArticleAd")),
  },
  secondaryArticleAd: {
    getComponent: () => dynamic(() => import("../../Ads/SecondaryArticleAd")),
  },
};
