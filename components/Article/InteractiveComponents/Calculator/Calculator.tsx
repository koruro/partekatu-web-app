import React, { useEffect } from "react";
import ReactTooltip from "react-tooltip";
import {
	beautifyProbability,
	getColorForPercentage,
	mapProbabilityToResponse,
} from "./lib";
import { useCalculatorHook } from "./useCalculatorHook";
import styles from "./styles.module.css";

const Calculator = () => {
	const {
		probability,
		data: { numberPossibleLessons, totalLessons, studiedLessons },
		setters: { setNumberPossibleLessons, setStudiedLessons, setTotalLessons },
	} = useCalculatorHook();

	useEffect(() => {
		if (totalLessons < studiedLessons) {
			setStudiedLessons(totalLessons);
		}
		if (totalLessons < numberPossibleLessons) {
			setNumberPossibleLessons(totalLessons);
		}
	}, [totalLessons]);

	return (
		<div className={["calculator", styles["calculator"]].join(" ")}>
			<div className={styles["calculator__primary"]}>
				<div className={styles["calculator__inputs-container"]}>
					<div className={styles["calculator__input-container"]}>
						<label htmlFor="totalLessons">
							<b>Total temas oposición:</b>
						</label>
						<input
							className={styles["calculator__input-text"]}
							type="number"
							name="total-lessons"
							id="totalLessons"
							placeholder="15"
							value={totalLessons}
							onChange={(e) => setTotalLessons(parseInt(e.target.value))}
						/>
					</div>
					<div className={styles["calculator__input-container"]}>
						<label htmlFor="studiedLessons">
							<b>Temas que voy a estudiar:</b> {studiedLessons}
						</label>
						<input
							className={styles["calculator__input-range"]}
							type="range"
							name="studied-lessons"
							id="studiedLessons"
							min="0"
							max={totalLessons}
							value={studiedLessons}
							onChange={(e) => setStudiedLessons(parseInt(e.target.value))}
						/>
					</div>
					<div className={styles["calculator__input-container"]}>
						<label htmlFor="possibleLessons">
							<b>Número de bolas que se extraen del bombo:</b>{" "}
							{numberPossibleLessons}
						</label>
						<input
							className={styles["calculator__input-range"]}
							name="possible-lessons"
							id="possibleLessons"
							type="range"
							min="1"
							max={totalLessons}
							value={numberPossibleLessons}
							onChange={(e) =>
								setNumberPossibleLessons(parseInt(e.target.value))
							}
						/>
					</div>
				</div>
				<div className={styles["calculator__display"]}>
					<div
						className={styles["calculator__info"]}
						data-for="info"
						data-tip="¿Quieres saber cómo se calcula esta probabilidad?"
					>
						<a href="./probabilidad-conjunta" target="_blank" rel="noopener">
							?
						</a>
						<ReactTooltip id="info" effect="solid" />
					</div>
					<div
						className={styles["calculator__percentage-display"]}
						style={{ color: getColorForPercentage(probability) }}
					>
						<span>
							{probability !== null
								? beautifyProbability(probability, 0) + "%"
								: "--"}
						</span>
					</div>
					<div className={styles["calculator__data"]}>
						<span
							data-for="totalLessons"
							data-tip={`Tu oposición tiene un total de ${totalLessons} temas`}
						>
							<ReactTooltip id="totalLessons" effect="solid" />
							📚 {totalLessons}
						</span>
						<span
							data-for="studiedLessons"
							data-tip={`Vas a estudiarte ${studiedLessons} temas`}
						>
							<ReactTooltip id="studiedLessons" effect="solid" />
							🙇🏻 {studiedLessons}
						</span>
						<span
							data-for="numberPossibleLessons"
							data-tip={`Puedes elegir entre ${numberPossibleLessons} temas`}
						>
							<ReactTooltip id="numberPossibleLessons" effect="solid" />
							👁️ {numberPossibleLessons}
						</span>
					</div>
				</div>
			</div>
			<div className={styles["calculator__response"]}>
				<p>
					<i>
						Tienes un <b>{beautifyProbability(probability, 2)}%</b> de
						posibilidades de que te entre al menos un tema que te sabes.{" "}
						{mapProbabilityToResponse(probability).text}
					</i>{" "}
					{mapProbabilityToResponse(probability).emoji}
				</p>
			</div>
		</div>
	);
};

export default Calculator;
