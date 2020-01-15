import React, { useEffect, useState } from "react";
import ArrowRight from "./../../assets/icons/white/arrow-right.svg";
import illustrationHomeMobile from "./../../assets/illustrations/illustration-home-mobile.png";
import illustrationHome from "./../../assets/illustrations/illustration-home.png";

const HomePage = ({ changeStep }) => {
	const [visibility, setVisibility] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setVisibility(true);
		}, 300);
	}, []);

	return (
		<div
			className={
				visibility ? "home-wrapper invisible appear" : "home-wrapper invisible"
			}
		>
			<div>
				<h1 className="home-page-title">Find your next green friend</h1>
				<div className="flex-item-center desktop-left">
					<a
						href="#!"
						className="btn btn-start"
						onClick={() => {
							changeStep(2);
						}}
					>
						<img src={ArrowRight} alt="arrow-right" className="btn-img" />
						<span>start quizz</span>
					</a>
				</div>
			</div>

			<img
				src={illustrationHome}
				alt="home-illustration"
				className="home-image"
			/>

			<img
				src={illustrationHomeMobile}
				alt="home-illustration-mobile"
				className="home-image-mobile"
			/>
		</div>
	);
};

export default HomePage;
