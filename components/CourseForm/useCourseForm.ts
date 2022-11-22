import { useEffect, useState } from "react";
import {
  CourseSubscriptionStatus,
  CourseSubscriptionStorageData,
  getCourseSubscribptionData,
  saveCourseSubscribptionData,
} from "./courseSubscriptionStorageService";

export function useCourseForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<null | string>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [subscriptionData, setSubscriptionData] =
    useState<CourseSubscriptionStorageData>();

  useEffect(() => {
    getCourseSubscribptionData().then(setSubscriptionData);
  }, []);

  const subscribeToList = async (email: string) => {
    setLoading(true);
    return fetch(
      "https://assets.mailerlite.com/jsonp/217609/forms/71331628028265621/subscribe",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: [`fields[email]=${email}`].join("&"),
      }
    )
      .then((res) =>
        res.json().then(({ success, errors }) => {
          setSuccess(success);
          errors?.fields?.email[0] && setError(errors.fields.email[0]);
        })
      )
      .catch((e) => setError(e))
      .finally(() => setLoading(false));
  };

  const submitForm = async () => {
    await subscribeToList(email);
    const d = new CourseSubscriptionStorageData(
      CourseSubscriptionStatus.Subscribed,
      new Date()
    );
    saveCourseSubscribptionData(d).then(() => setSubscriptionData(d));
  };

  const ignoreForm = async () => {
    const d = new CourseSubscriptionStorageData(
      CourseSubscriptionStatus.Closed,
      new Date()
    );
    saveCourseSubscribptionData(d).then(() => setSubscriptionData(d));
  };

  return {
    name,
    setName,
    email,
    setEmail,
    success,
    error,
    loading,
    subscribeToList,
    setTermsAccepted,
    termsAccepted,
    submitEnabled: termsAccepted && email != "",
    submitForm,
    ignoreForm,
    subscriptionData,
  };
}
