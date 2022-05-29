import { CategoriesEnum } from "../../../types/categories";
import TagBox, { TagBoxProps } from "../../Shared/TagBox/TagBox";
import { CategoriesDict } from "../categories";
import styles from "./styles.module.css";

interface Props extends TagBoxProps {
  category: CategoriesEnum;
}

const CategoryBox: React.FC<
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > &
    Props
> = ({ category, as }) => {
  return (
    <TagBox
      as={as}
      className={styles[`category--${CategoriesDict[category].slug}`]}
    >
      {CategoriesDict[category].text}
    </TagBox>
  );
};

export default CategoryBox;
