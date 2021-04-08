import React, { useState, useContext } from "react";
import { GameMenu } from "./gameMenu.jsx";
import { Quiz } from "./quiz.jsx";
import { FinalScreen } from "./finalScreen.jsx";
import { QuizContext } from "../Flux/store.jsx";
import "../../styles/home.scss";

//create your first component
export function Home() {
	const [gameState, setGameState] = useState("menu");
	const [score, setScore] = useState(0);
	const [name, setName] = useState("");
	const [validation, setValidation] = useState(0);
	const [select, setSelect] = useState(0);

	const restart = () => {
		setGameState("menu");
		setScore(0);
		setName("");
		setValidation(0);
		setSelect(0);
	};

	return (
		<div className="container">
			<div
				id="home"
				className="row m-4 d-flex align-items-center justify-content-center">
				<ul onClick={restart} className="c-rainbow">
					<li className="c-rainbow__layer c-rainbow__layer--white">
						TETÓN
					</li>
					<li className="c-rainbow__layer c-rainbow__layer--orange">
						TETÓN
					</li>
					<li className="c-rainbow__layer c-rainbow__layer--red">
						TETÓN
					</li>
					<li className="c-rainbow__layer c-rainbow__layer--violet">
						TETÓN
					</li>
					<li className="c-rainbow__layer c-rainbow__layer--blue">
						TETÓN
					</li>
					<li className="c-rainbow__layer c-rainbow__layer--green">
						TETÓN
					</li>
					<li className="c-rainbow__layer c-rainbow__layer--yellow">
						TETÓN
					</li>
				</ul>
			</div>
			<div className="row m-2 d-flex align-items-center justify-content-center text-center">
				<h3>¡Veamos que tanto conocés a Justin el Tetón!</h3>
			</div>
			<div className="row m-2 d-flex justify-content-center">
				<QuizContext.Provider
					value={{
						gameState,
						setGameState,
						score,
						setScore,
						name,
						setName,
						validation,
						setValidation,
						select,
						setSelect
					}}>
					{gameState === "menu" && <GameMenu />}
					{gameState === "quiz" && <Quiz />}
					{gameState === "finalScreen" && <FinalScreen />}
				</QuizContext.Provider>
			</div>
			<div className="row m-2 d-flex align-items-center justify-content-center text-center">
				<h6>
					Aplicación creada por{" "}
					<a
						href="https://github.com/DavidRivasM"
						rel="noreferrer"
						target="_blank">
						David Rivas Mora.
					</a>
				</h6>
			</div>
			<div className="row m-2 d-flex align-items-center justify-content-center text-center">
				<h8>Todos los derechos reservados 2021 ©</h8>
			</div>
		</div>
	);
}

// https://css-tricks.com/css-animation-libraries/
