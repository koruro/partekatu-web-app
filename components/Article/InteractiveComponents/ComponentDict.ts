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
  "name-finder": {
    getComponent: () => dynamic(() => import("./NameFinder/NameFinder")),
  },
  articleAd: {
    getComponent: () => dynamic(() => import("../../Ads/InArticleAd")),
  },
  secondaryArticleAd: {
    getComponent: () => dynamic(() => import("../../Ads/SecondaryArticleAd")),
  },
};
