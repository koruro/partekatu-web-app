import VideoSection from "./VideoSection";
import LearningPathSection from "./LearningPathSection";
import OpinionSection from "./OpinionSection";
import FaqSection from "./FaqSection";
import HeroHeaderSection from "./HeroHeaderSection";
import styles from "./styles.module.css";
import DontWait from "./DontWait";

interface Props {
  onCTAClick: () => any;
}
const BasicCourseLandingContainer: React.FC<Props> = ({ onCTAClick }) => {
  return (
    <div className={styles["basic-course-lp"]}>
      <HeroHeaderSection onCTAClick={onCTAClick} />
      <div className={styles["divider"]}></div>
      <VideoSection />
      <div className={styles["divider-2"]}></div>
      <LearningPathSection />
      <DontWait onCTAClick={onCTAClick} />
      <OpinionSection />
      <FaqSection />
    </div>
  );
};

export default BasicCourseLandingContainer;
