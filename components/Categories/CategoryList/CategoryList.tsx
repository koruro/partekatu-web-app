import classNames from "classnames";
import { useRouter } from "next/router";
import { DetailedHTMLProps, HTMLAttributes } from "react";
import { CategoriesEnum } from "../../../types/categories";
import { CategoriesDict } from "../categories";
import CategoryBox from "../CategoryBox/CategoryBox";
import OnlineCourse from "../OnlineCourse/OnlineCourse";
import styles from "./styles.module.css";

interface Props {
  categoryAs?: "h2" | "span";
  inColumn?: boolean;
}

const CategoryList: React.FC<
  Props & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = ({ categoryAs, inColumn, ...props }) => {
  const { asPath } = useRouter();

  const isCoursePage = asPath.includes("curso-euskera-online");

  return (
    <div
      {...props}
      className={classNames(styles["container"], props.className)}
    >
      <div
        className={classNames(styles["category-list-box"], {
          [styles["category-list-box--wrap"]]: !inColumn,
          [styles["category-list-box--column"]]: inColumn,
        })}
      >
        {Object.keys(CategoriesDict).map((category) => (
          <a
            className={`${styles["category-list-item"]} hoverable-elevate`}
            key={category}
            href={`/categorias/${category}`}
          >
            <CategoryBox
              as={categoryAs ?? "span"}
              category={category as CategoriesEnum}
            />
          </a>
        ))}
      </div>
      {!isCoursePage && <OnlineCourse />}
    </div>
  );
};

export default CategoryList;
