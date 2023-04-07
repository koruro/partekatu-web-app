import VideoSection from "./VideoSection";
import LearningPathSection from "./LearningPathSection";
import OpinionSection from "./OpinionSection";
import FaqSection from "./FaqSection";
import HeroHeaderSection from "./HeroHeaderSection";
import styles from "./styles.module.css";
import DontWait from "./DontWait";

const BasicCourseLandingContainer: React.FC = () => {
  return (
    <div className={styles["basic-course-lp"]}>
      <HeroHeaderSection />
      <div className={styles["divider"]}></div>
      <VideoSection />
      <div className={styles["divider-2"]}></div>
      <LearningPathSection />
      <DontWait />
      <OpinionSection />
      <FaqSection />
    </div>
  );
};

export default BasicCourseLandingContainer;
