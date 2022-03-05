import styles from "./styles.module.css";

interface Match {
	name: string;
}

interface Props {
	matches?: Match[];
	onMatchClick: (match: Match) => void;
}

const Autocomplete: React.FC<Props> = ({ matches, onMatchClick }) => {
	if (!matches) return null;
	if (matches.length <= 0) return null;
	return (
		<div className={styles["autocomplete"]}>
			<ul>
				{matches.map((match, index) => (
					<li key={index}>
						<button
							type="submit"
							name="btn1"
							value="wow"
							onClick={() => onMatchClick(match)}
						>
							{match.name}
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Autocomplete;
