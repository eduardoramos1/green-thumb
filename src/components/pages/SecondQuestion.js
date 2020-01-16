import React, { useEffect, useState } from "react";

import wateringcan from "./../../assets/illustrations/wateringcan.png";

import oneDropGreen from "./../../assets/icons/green/one-drop.svg";
import twoDropGreen from "./../../assets/icons/green/two-drops.svg";
import threeDropGreen from "./../../assets/icons/green/three-drops.svg";

import oneDropWhite from "./../../assets/icons/white/one-drop.svg";
import twoDropWhite from "./../../assets/icons/white/two-drops.svg";
import threeDropWhite from "./../../assets/icons/white/three-drops.svg";

import leftArrowGreen from "./../../assets/icons/green/left-arrow.svg";
import rightArrowGreen from "./../../assets/icons/green/right-arrow.svg";

import rightArrowWhite from "./../../assets/icons/white/arrow-right.svg";
import leftArrowWhite from "./../../assets/icons/white/arrow-left.svg";

const SecondQuestion = ({ changeStep, setSecondAnswer, secondAnswer }) => {
	const [firstQuestion, setFirstQuestion] = useState(false);
	const [secondQuestion, setSecondQuestion] = useState(false);
	const [thirdQuestion, setThirdQuestion] = useState(false);

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
		setThirdQuestion(false);

		setSecondAnswer(answer);
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
					<img src={wateringcan} alt="wateringcan" />
				</div>
				<div className="grid-item">
					<p className="question">
						How often do you want to <span className="bold-text">water</span>{" "}
						your plant?
					</p>
				</div>

				<div className=" card-container flex-item-center">
					<div
						className={
							firstQuestion || secondAnswer === "rarely"
								? "card card-active-green"
								: "card"
						}
						onClick={() => setAnswer(setFirstQuestion, "rarely")}
					>
						<img
							src={
								firstQuestion || secondAnswer === "rarely"
									? oneDropWhite
									: oneDropGreen
							}
							alt="Rarely"
						/>
						<p>Rarely</p>
					</div>
					<div
						className={
							secondQuestion || secondAnswer === "regularly"
								? "card card-active-green"
								: "card"
						}
						onClick={() => setAnswer(setSecondQuestion, "regularly")}
					>
						<img
							src={
								secondQuestion || secondAnswer === "regularly"
									? twoDropWhite
									: twoDropGreen
							}
							alt="Regularly"
						/>
						<p>Regularly</p>
					</div>
					<div
						className={
							thirdQuestion || secondAnswer === "daily"
								? "card card-active-green"
								: "card"
						}
						onClick={() => setAnswer(setThirdQuestion, "daily")}
					>
						<img
							src={
								thirdQuestion || secondAnswer === "daily"
									? threeDropWhite
									: threeDropGreen
							}
							alt="Daily"
						/>
						<p>Daily</p>
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
						onClick={() => changeStep(2)}
					>
						<img
							src={prevButtonActive ? leftArrowWhite : leftArrowGreen}
							alt="left-arrow"
							className="btn-img"
						/>{" "}
						previous
					</a>

					{secondAnswer !== null && (
						<a
							href="#!"
							className="btn ghost"
							onMouseOver={() => {
								setNextButtonActive(true);
							}}
							onMouseOut={() => setNextButtonActive(false)}
							onClick={() => changeStep(4)}
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

export default SecondQuestion;
