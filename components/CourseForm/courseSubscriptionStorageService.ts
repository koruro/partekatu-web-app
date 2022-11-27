export enum CourseSubscriptionStatus {
  Unfilled = "UNFILLED",
  Subscribed = "SUBSCRIBED",
  Closed = "CLOSED",
}

export class CourseSubscriptionStorageData {
  constructor(readonly status: CourseSubscriptionStatus, public at: Date) {}

  public isFilled() {
    return this.status !== CourseSubscriptionStatus.Unfilled;
  }
}

export const saveCourseSubscribptionData = async (
  data: CourseSubscriptionStorageData
) => {
  const d = { status: data.status, at: Math.floor(data.at.getTime() / 1000) };

  localStorage.setItem("course_release_subscription", JSON.stringify(d));
};

export const getCourseSubscribptionData =
  async (): Promise<CourseSubscriptionStorageData> => {
    const item = localStorage.getItem("course_release_subscription");

    if (!item) {
      return new CourseSubscriptionStorageData(
        CourseSubscriptionStatus.Unfilled,
        new Date()
      );
    }

    const data = JSON.parse(item);
    return new CourseSubscriptionStorageData(
      data.status as CourseSubscriptionStatus,
      new Date(data.at * 1000)
    );
  };
