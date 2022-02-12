interface Props {
	onClick: () => any;
	hoverEffect?: boolean;
	ariaLabel?: string;
}

const DownloadButton: React.FC<Props> = ({
	onClick,
	children,
	hoverEffect,
	ariaLabel,
}) => {
	return (
		<button
			className={hoverEffect ? "hoverable-elevate" : undefined}
			onClick={onClick}
			aria-label={ariaLabel}
			style={{ cursor: "pointer", background: "none", border: "none" }}
		>
			{children}
		</button>
	);
};

export default DownloadButton;
