import React, { useState, useEffect } from "react";

import dog from "./../../assets/illustrations/dog.png";

import pet from "./../../assets/icons/coral/pet.svg";
import noAnswerCoral from "./../../assets/icons/coral/no-answer.svg";

import petWhite from "./../../assets/icons/white/pet.svg";
import noAnswerWhite from "./../../assets/icons/white/no-answer.svg";

import leftArrowGreen from "./../../assets/icons/green/left-arrow.svg";
import rightArrowGreen from "./../../assets/icons/green/right-arrow.svg";

import rightArrowWhite from "./../../assets/icons/white/arrow-right.svg";
import leftArrowWhite from "./../../assets/icons/white/arrow-left.svg";

const ThirdQuestion = ({ changeStep, setThirdAnswer, thirdAnswer }) => {
	const [firstQuestion, setFirstQuestion] = useState(false);
	const [secondQuestion, setSecondQuestion] = useState(false);

	const [prevButtonActive, setPrevButtonActive] = useState(false);
	const [nextButtonActive, setNextButtonActive] = useState(false);

	const [visibility, setVisibility] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setVisibility(true);
		}, 300);
	}, []);

	const setAnswer = (activationFunc, answer) => {
		setFirstQuestion(false);
		setSecondQuestion(false);

		setThirdAnswer(answer);
		return activationFunc(true);
	};

	return (
		<div
			className={
				visibility
					? "flex-item-center mt-1 invisible appear"
					: " flex-item-center mt-1 invisible"
			}
		>
			<div className="grid-1">
				<div className="grid-item">
					<img src={dog} alt="dog" />
				</div>
				<div className="grid-item">
					<div className="flex-collumn">
						<p className="question">
							Do you have pets? Do they <span className="bold-text">chew</span>{" "}
							on plants?
						</p>
						<p className="question-warning">
							We are asking because some plants can be{" "}
							<span className="bold-text">toxic</span> for your buddy
						</p>
					</div>
				</div>

				<div className=" card-container flex-item-center">
					<div
						className={
							firstQuestion || thirdAnswer === true
								? "card card-active"
								: "card"
						}
						onClick={() => setAnswer(setFirstQuestion, true)}
					>
						<img
							src={firstQuestion || thirdAnswer === true ? petWhite : pet}
							alt="yes"
						/>
						<p className="card-text">Yes</p>
					</div>

					<div
						className={
							secondQuestion || thirdAnswer === false
								? "card card-active"
								: "card"
						}
						onClick={() => setAnswer(setSecondQuestion, false)}
					>
						<img
							src={
								secondQuestion || thirdAnswer === false
									? noAnswerWhite
									: noAnswerCoral
							}
							alt="no"
						/>
						<p>No/They don't care</p>
					</div>
				</div>
				{/* buttons */}
				<div className="button-group">
					<a
						href="#!"
						className="btn ghost"
						onMouseOver={() => {
							setPrevButtonActive(true);
						}}
						onMouseOut={() => setPrevButtonActive(false)}
						onClick={() => changeStep(3)}
					>
						<img
							src={prevButtonActive ? leftArrowWhite : leftArrowGreen}
							alt="left-arrow"
							className="btn-img"
						/>{" "}
						previous
					</a>

					{thirdAnswer !== null && (
						<a
							href="#!"
							className="btn ghost"
							onMouseOver={() => {
								setNextButtonActive(true);
							}}
							onMouseOut={() => setNextButtonActive(false)}
							onClick={() => changeStep(5)}
						>
							<img
								src={nextButtonActive ? rightArrowWhite : rightArrowGreen}
								alt="right-arrow"
								className="btn-img"
							/>{" "}
							next
						</a>
					)}
				</div>
			</div>
		</div>
	);
};

export default ThirdQuestion;
