import styles from "./styles.module.css";

interface Props {
	breakLimit?: "md" | "lg" | "xl" | "xxl";
}
const PageContainerBox: React.FC<
	Props &
		React.DetailedHTMLProps<
			React.HTMLAttributes<HTMLDivElement>,
			HTMLDivElement
		>
> = ({ children, breakLimit, ...props }) => {
	breakLimit = breakLimit ?? "md";
	const classes = breakLimit
		? [
				styles["page-container-box"],
				styles[`page-container-box--${breakLimit}`],
				props.className,
		  ]
		: [styles["page-container-box"], props.className];
	return (
		<div {...props} className={classes.join(" ")}>
			{children}
		</div>
	);
};

export default PageContainerBox;
