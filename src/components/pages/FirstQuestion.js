import React, { useState } from "react";

import sun from "./../../assets/illustrations/sun.png";

import highSunCoral from "./../../assets/icons/coral/high-sun.svg";
import lowSunCoral from "./../../assets/icons/coral/low-sun.svg";
import noAnswerCoral from "./../../assets/icons/coral/no-answer.svg";

import highSunWhite from "./../../assets/icons/white/high-sun.svg";
import lowSunWhite from "./../../assets/icons/white/low-sun.svg";
import noAnswerWhite from "./../../assets/icons/white/no-answer.svg";

import leftArrowGreen from "./../../assets/icons/green/left-arrow.svg";
import rightArrowGreen from "./../../assets/icons/green/right-arrow.svg";

import rightArrowWhite from "./../../assets/icons/white/arrow-right.svg";
import leftArrowWhite from "./../../assets/icons/white/arrow-left.svg";

const FirstQuestion = ({ changeStep }) => {
	const [firstQuestion, setFirstQuestion] = useState(false);
	const [secondQuestion, setSecondQuestion] = useState(false);
	const [thirdQuestion, setThirdQuestion] = useState(false);

	const [prevButtonActive, setPrevButtonActive] = useState(false);
	const [nextButtonActive, setNextButtonActive] = useState(false);

	const setAnswer = func => {
		setFirstQuestion(false);
		setSecondQuestion(false);
		setThirdQuestion(false);

		return func(true);
	};

	return (
		<div className=" flex-item-center mt-1 ">
			<div className="grid-1">
				<div className="grid-item">
					<img src={sun} alt="sun" />
				</div>
				<div className="grid-item">
					<p className="question">
						First, set the amount of <span className="bold-text">sunlight</span>{" "}
						your plant will get
					</p>
				</div>

				<div className=" card-container flex-item-center">
					<div
						className={firstQuestion ? "card card-active" : "card"}
						onClick={() => setAnswer(setFirstQuestion)}
					>
						<img
							src={firstQuestion ? highSunWhite : highSunCoral}
							alt="high sun"
						/>
						<p>High sunlight</p>
					</div>
					<div
						className={secondQuestion ? "card card-active" : "card"}
						onClick={() => setAnswer(setSecondQuestion)}
					>
						<img
							src={secondQuestion ? lowSunWhite : lowSunCoral}
							alt="low sun"
						/>
						<p>Low sunlight</p>
					</div>
					<div
						className={thirdQuestion ? "card card-active" : "card"}
						onClick={() => setAnswer(setThirdQuestion)}
					>
						<img
							src={thirdQuestion ? noAnswerWhite : noAnswerCoral}
							alt="no answer"
						/>
						<p>No sunlight</p>
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
						onClick={() => changeStep(1)}
					>
						<img
							src={prevButtonActive ? leftArrowWhite : leftArrowGreen}
							alt="left-arrow"
							className="btn-img"
						/>{" "}
						home
					</a>
					<a
						href="#!"
						className="btn ghost"
						onMouseOver={() => {
							setNextButtonActive(true);
						}}
						onMouseOut={() => setNextButtonActive(false)}
						onClick={() => changeStep(3)}
					>
						<img
							src={nextButtonActive ? rightArrowWhite : rightArrowGreen}
							alt="right-arrow"
							className="btn-img"
						/>{" "}
						next
					</a>
				</div>
			</div>
		</div>
	);
};

export default FirstQuestion;
