import React, { useContext, useState } from "react";
import { QuizContext } from "../Flux/store.jsx";
import "../../styles/gameMenu.scss";

//create your component
export function GameMenu() {
	const {
		gameState,
		setGameState,
		name,
		setName,
		validation,
		setValidation
	} = useContext(QuizContext);

	return (
		<div className="container-md">
			<div className="row m-2 d-flex align-items-center justify-content-center text-center">
				<p>
					Este quiz app consta de una serie de preguntas sobre la vida
					de Justin el Tetón y su quehacer en la prostitución
					homosexual, al final recibirás una calificación basada en
					las respuestas correctas que brindes...
				</p>
			</div>
			<div className="row m-2 d-flex align-items-center justify-content-center text-center">
				<strong>¡Pero primero, queremos conocerte!</strong>
			</div>
			<div className="row m-4 d-flex align-items-center justify-content-center text-center">
				<input
					type="text"
					className={
						"form-control text-center" +
						(validation == 0 ? " valido" : " invalido")
					}
					placeholder="Escribe tu nombre"
					onChange={e => {
						setName(e.target.value);
					}}
				/>
			</div>
			<div className="row m-4 d-flex align-items-center justify-content-center">
				<button
					style={{
						border: "black solid 2px"
					}}
					id="boton_inicio"
					type="button"
					onClick={() => {
						if (name == "") {
							setValidation(1);
						} else {
							setGameState("quiz");
						}
					}}
					className="btn btn-info">
					Empezar
				</button>
			</div>
			<div className="row m-4 d-flex align-items-center justify-content-center">
				{validation == 1 && (
					<div className="alert m-2 alert-danger alert-dismissible fade show align-items-center justify-content-center text-center">
						<strong>¡Cuidado!</strong> Tienes que introducir algún
						nombre para continuar.
						<button
							type="button"
							className="close"
							data-dismiss="alert"
							onClick={() => {
								setValidation(0);
							}}>
							&times;
						</button>
					</div>
				)}
			</div>
		</div>
	);
}

export default GameMenu;
