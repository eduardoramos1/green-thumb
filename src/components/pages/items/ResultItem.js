import React from "react";

const ResultItem = ({ plant, iconsAdress }) => {
	return (
		<div className="grid-results-item">
			<img src={plant.url} alt={plant.name} height="170px" />
			<p className="description"> {plant.name} </p>
			<div className="details">
				{" "}
				<span>${plant.price}</span>
				<div>
					{plant.toxicity && <img src={iconsAdress.toxic} alt="toxic" />}
					<img src={iconsAdress[plant.sun]} alt={plant.sun} />
					<img src={iconsAdress[plant.water]} alt={plant.water} />
				</div>
			</div>
			<a href="#!" className="btn ghost">
				{" "}
				Buy now
			</a>
		</div>
	);
};

export default ResultItem;
