import React, { useState, useContext } from "react";
import { Questions } from "../Flux/questionsBank.jsx";
import { QuizContext } from "../Flux/store.jsx";

//create your first component
export function FinalScreen() {
	const {
		score,
		setGameState,
		setScore,
		name,
		setName,
		setValidation
	} = useContext(QuizContext);

	const restart = () => {
		setGameState("menu");
		setScore(0);
		setName("");
		setValidation(0);
	};

	return (
		<div className="finalScreen">
			<div className="row text-center d-flex align-items-center justify-content-center">
				<h3>
					¡{name}! Contestaste bien {score} de {Questions.length}{" "}
					preguntas en total.
				</h3>
			</div>
			<div className="row text-center d-flex align-items-center justify-content-center">
				<div>
					<button
						id="boton_inicio"
						onClick={restart}
						className="btn btn-primary m-3"
						type="button">
						Intentar de nuevo
					</button>
				</div>
			</div>
		</div>
	);
}

export default FinalScreen;
