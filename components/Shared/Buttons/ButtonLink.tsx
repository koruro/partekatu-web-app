import styles from "./styles.module.css";

const ButtonLink: React.FC<
	React.DetailedHTMLProps<
		React.AnchorHTMLAttributes<HTMLAnchorElement>,
		HTMLAnchorElement
	>
> = ({ children, ...props }) => {
	return (
		<a
			{...props}
			className={[
				styles.button,
				styles["button--hover"],
				props.className,
				"hoverable-elevate",
				"button-padding-2",
			].join(" ")}
		>
			{children}
		</a>
	);
};

export default ButtonLink;
