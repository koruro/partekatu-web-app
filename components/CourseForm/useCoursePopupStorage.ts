import { useEffect, useState } from "react";

const ITEM_NAME = "course_popup";

export enum CoursePopupState {
  VISITED = "VISITED", // User has visited landing page
  CLICKED = "CLICKED", // User has clicked on CTA
  CLOSED = "CLOSED", // User has closed banner
  DEFAULT = "DEFAULT", // User hasnt performed any action
}

export class CoursePopupData {
  constructor(public at: Date, public state: CoursePopupState) {}
}

export const saveCoursePopupData = async (data: CoursePopupData) => {
  const d = { at: Math.floor(data.at.getTime() / 1000), state: data.state };

  localStorage.setItem(ITEM_NAME, JSON.stringify(d));
};

export const getCoursePopupData = async (): Promise<CoursePopupData> => {
  const item = localStorage.getItem(ITEM_NAME);

  if (!item) {
    return new CoursePopupData(new Date(0), CoursePopupState.DEFAULT);
  }

  const data = JSON.parse(item);
  return new CoursePopupData(new Date(data.at * 1000), data.state);
};

export const useCoursePopupDataStorage = () => {
  const [popupData, setPopupData] = useState<CoursePopupData>();

  useEffect(() => {
    getCoursePopupData().then(setPopupData);
  }, []);

  return {
    popupData,
    setPopupData: async (data: CoursePopupData) => {
      await saveCoursePopupData(data);
      setPopupData(data);
    },
  };
};
