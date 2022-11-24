import { useEffect, useState } from "react";
import {
  CourseSubscriptionStorageData,
  getCourseSubscribptionData,
} from "./courseSubscriptionStorageService";

export const useCourseDataStorage = () => {
  const [subscriptionData, setSubscriptionData] =
    useState<CourseSubscriptionStorageData>();

  useEffect(() => {
    getCourseSubscribptionData().then(setSubscriptionData);
  }, []);

  return { subscriptionData, setSubscriptionData };
};
