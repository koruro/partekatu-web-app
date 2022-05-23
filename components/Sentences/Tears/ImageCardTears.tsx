import PartekatuTear from "./PartekatuTear";
import styles from "./styles.module.css";

const ImageCardTears = () => {
  return (
    <div className={styles["image-card-tears"]}>
      <PartekatuTear width={70} style={{ position: "absolute", left: "0px" }} />
      <PartekatuTear
        width={70}
        style={{ position: "absolute", left: "30px" }}
      />
    </div>
  );
};

export default ImageCardTears;
