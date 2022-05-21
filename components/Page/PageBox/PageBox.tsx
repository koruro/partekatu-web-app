import styles from "./styles.module.css";

const PageBox: React.FC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = ({ children, ...props }) => {
  return (
    <div
      className={`${styles.container}${
        props.className ? ` ${props.className}` : ""
      }`}
    >
      {children}
    </div>
  );
};

export default PageBox;
