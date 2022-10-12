import { CategoriesEnum } from "../../../types/categories";
import TagBox, { TagBoxProps } from "../../Shared/TagBox/TagBox";
import { CategoriesDict } from "../categories";
import styles from "./styles.module.css";

interface Props extends TagBoxProps {
  category: CategoriesEnum;
}

const getCategoryClassName = (category: CategoriesEnum) => {
  const categoryData = CategoriesDict[category];

  if (!categoryData) return;

  return styles[`category--${categoryData.slug}`];
};

const CategoryBox: React.FC<
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > &
    Props
> = ({ category, as, ...props }) => {
  return (
    <TagBox {...props} as={as} className={getCategoryClassName(category)}>
      {CategoriesDict[category].text}
    </TagBox>
  );
};

export default CategoryBox;
