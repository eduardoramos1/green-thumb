import React, { useEffect, useState } from "react";

import ResultItem from "./items/ResultItem";
import Spinner from "./../layout/Spinner";

import pick from "./../../assets/illustrations/pick.png";
import noAnswer from "./../../assets/icons/grey/no-answer.svg";
import highSun from "./../../assets/icons/grey/high-sun.svg";
import oneDrop from "./../../assets/icons/grey/one-drop.svg";
import toxic from "./../../assets/icons/grey/toxic.svg";
import lowSun from "./../../assets/icons/grey/low-sun.svg";
import twoDrops from "./../../assets/icons/grey/two-drops.svg";
import threeDrops from "./../../assets/icons/grey/three-drops.svg";

const QuestionResults = ({ firstAnswer, secondAnswer, thirdAnswer }) => {
	const [visibility, setVisibility] = useState(false);
	const [loading, setLoading] = useState(false);
	const [plants, setPlants] = useState([]);

	const iconsAdress = {
		high: highSun,
		low: lowSun,
		no: noAnswer,
		daily: threeDrops,
		regularly: twoDrops,
		rarely: oneDrop,
		toxic: toxic
	};

	useEffect(() => {
		setTimeout(() => {
			setVisibility(true);
		}, 300);

		const fetchData = async () => {
			const urlFetch =
				"https://6nrr6n9l50.execute-api.us-east-1.amazonaws.com/default/front-plantTest-service";

			const res = await fetch(
				`${urlFetch}?sun=${firstAnswer}&water=${secondAnswer}&pets=${thirdAnswer}`
			);
			const data = await res.json();

			setLoading(false);
			setPlants(data);
		};

		fetchData();
		// eslint-disable-next-line
	}, []);

	if (loading) return <Spinner />;

	return (
		<div
			className={
				visibility
					? "flex-item-center mt-1 invisible appear"
					: " flex-item-center mt-1 invisible"
			}
		>
			<div className="main-grid">
				<div className="grid-item">
					<img src={pick} alt="pick" className="img" />
				</div>
				<div className="grid-item">
					<h2 className="h2-title">Our picks for you</h2>
				</div>
				<div className="grid-results">
					{plants.length > 0
						? plants.map(plant => (
								<ResultItem
									key={plant.id}
									plant={plant}
									iconsAdress={iconsAdress}
								/>
						  ))
						: "Sem resultados para sua pesquisa"}
				</div>
			</div>
		</div>
	);
};

export default QuestionResults;
