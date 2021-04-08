import React, { useState, useContext } from "react";
import { Questions } from "../Flux/questionsBank.jsx";
import { Hints } from "../Flux/hints.jsx";
import { QuizContext } from "../Flux/store.jsx";
import "../../styles/quiz.scss";
import { Card, Button } from "react-bootstrap";
import { images } from "../../img/foto_justin_pelo_rojo.jpg";

//create your first component
export function Quiz() {
	const { score, setScore, setGameState, select, setSelect } = useContext(
		QuizContext
	);

	const [currQuestion, setCurrQuestion] = useState(0);
	const [currOption, setCurrOption] = useState("");
	const totalPreguntas = Questions.length;
	const preguntaActual = currQuestion + 1;

	const nextQuestion = () => {
		if (currOption == "") {
			console.log("Seleccione una respuesta");
			setSelect(1);
		} else if (Questions[currQuestion].answer == currOption) {
			setScore(score + 1);
			setCurrQuestion(currQuestion + 1);
			setCurrOption("");
			setSelect(0);
		} else {
			setCurrQuestion(currQuestion + 1);
			setCurrOption("");
			setSelect(0);
		}
	};

	const finishTest = () => {
		if (currOption == "") {
			console.log("Seleccione una respuesta");
			setSelect(1);
		} else if (Questions[currQuestion].answer == currOption) {
			setScore(score + 1);
			setCurrOption("");
			setGameState("finalScreen");
			setSelect(0);
		} else {
			setCurrQuestion(currQuestion + 1);
			setCurrOption("");
			setGameState("finalScreen");
			setSelect(0);
		}
	};

	return (
		<div className="container-md">
			<div className="row text-center d-flex align-items-center justify-content-center">
				<h5>
					¡Vas por la pregunta {preguntaActual} de {totalPreguntas}!
				</h5>
			</div>
			<div className="row text-center d-flex align-items-center justify-content-center">
				<h3>{Questions[currQuestion].prompt}</h3>
			</div>
			<div className="row m-3 text-center d-flex align-items-center justify-content-center">
				<Card
					id="carta"
					style={{
						width: "20rem",
						borderRadius: "105px",
						border: "black solid 4px"
					}}>
					<Card.Img
						style={{
							height: "200px",
							borderTopLeftRadius: "100px",
							borderTopRightRadius: "100px",
							borderBottom: "black solid 4px"
						}}
						variant="top"
						src={Hints[currQuestion].image}
					/>
					<Card.Body>
						<Card.Title>¡Sabías que...!</Card.Title>
						<Card.Text>{Hints[currQuestion].hint}</Card.Text>
					</Card.Body>
				</Card>
			</div>
			<div className="d-grid gap-2 mx-auto text-center">
				<button
					id="boton_opcion"
					onClick={() => setCurrOption("optionA")}
					className="big-button m-4"
					type="button">
					{Questions[currQuestion].optionA}
				</button>
				<button
					onClick={() => setCurrOption("optionB")}
					className="big-button m-4"
					type="button">
					{Questions[currQuestion].optionB}
				</button>
				<button
					onClick={() => setCurrOption("optionC")}
					className="big-button m-4"
					type="button">
					{Questions[currQuestion].optionC}
				</button>
			</div>
			<div className="row text-center d-flex align-items-center justify-content-center">
				{select == 1 && (
					<div
						id="alerta-pregunta"
						className="alert mt-4 alert-danger alert-dismissible fade show align-items-center justify-content-center text-center">
						<strong>¡Cuidado!</strong> Tienes seleccionar alguna
						respuesta.
						<button
							type="button"
							className="close"
							data-dismiss="alert"
							onClick={() => {
								setSelect(0);
							}}>
							&times;
						</button>
					</div>
				)}
			</div>
			<div className="row text-center d-flex align-items-center justify-content-center">
				{currQuestion == Questions.length - 1 ? (
					<button
						style={{
							border: "black solid 2px"
						}}
						id="boton_inicio"
						onClick={finishTest}
						className="btn btn-info btn-sm m-5"
						type="button">
						Terminar quiz
					</button>
				) : (
					<button
						style={{
							border: "black solid 2px"
						}}
						id="boton_inicio"
						onClick={nextQuestion}
						className="btn btn-info btn-sm m-5"
						type="button">
						Siguiente pregunta
					</button>
				)}
			</div>
		</div>
	);
}

export default Quiz;
