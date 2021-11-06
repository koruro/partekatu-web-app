import styles from "./styles.module.css";

const CardBase: React.FC<
	React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = ({ children, ...props }) => {
	return (
		<div
			{...props}
			className={[styles["card-base"], props.className].join(" ")}
		>
			{children}
		</div>
	);
};

export default CardBase;
