import { SurnameMatch } from "../../../../../models/surname/SurnameMatch";
import style from "./style.module.css";

interface Props {
	suggestions: SurnameMatch[];
	hrefFactory: (suggestion: SurnameMatch) => string;
}

const SurnameSuggestions: React.FC<Props> = ({ suggestions, hrefFactory }) => {
	if (!suggestions) return null;
	return (
		<div className={style["suggestions"]}>
			<p>Quizás te interese:</p>
			<ul>
				{suggestions.map((suggestion, index) => (
					<li key={index}>
						<a href={hrefFactory(suggestion)}>{suggestion.surname}</a>
					</li>
				))}
			</ul>
		</div>
	);
};

export default SurnameSuggestions;
