import React, { useEffect, useState } from "react";

import noAnswer from "./../../assets/icons/grey/no-answer.svg";
import highSun from "./../../assets/icons/grey/high-sun.svg";
import oneDrop from "./../../assets/icons/grey/one-drop.svg";
import toxic from "./../../assets/icons/grey/toxic.svg";
import lowSun from "./../../assets/icons/grey/low-sun.svg";
import twoDrops from "./../../assets/icons/grey/two-drops.svg";
import threeDrops from "./../../assets/icons/grey/three-drops.svg";

const PurchasePage = ({ purchasedItem }) => {
	const [visibility, setVisibility] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setVisibility(true);
		}, 300);
		document.body.classList.add("bg-white");
		document.querySelector("html").classList.add("bg-white");
		console.log(purchasedItem);
	}, []);

	const iconsAdress = {
		high: highSun,
		low: lowSun,
		no: noAnswer,
		daily: threeDrops,
		regularly: twoDrops,
		rarely: oneDrop,
		toxic: toxic
	};

	return (
		<div
			className={
				visibility
					? "flex-item-center mt-1 invisible appear"
					: " flex-item-center mt-1 invisible"
			}
		>
			<div className="purchased-page-grid">
				<div className="purchased-item">
					<div>
						<h2 className="purchased-item-title">{purchasedItem.name}</h2>
						<div className="purchased-item-price">${purchasedItem.price}</div>
					</div>
					<img src={purchasedItem.url} alt="item" width="200px" />
					<div className="purchased-item-details">
						<div>
							<img src={iconsAdress[purchasedItem.sun]} alt="sun" />
							<span>{` ${purchasedItem.sun[0].toUpperCase() +
								purchasedItem.sun.slice(1)}-sunlight`}</span>
						</div>
						<div>
							<img src={iconsAdress[purchasedItem.water]} alt="water" />
							<span>Water {purchasedItem.water}</span>
						</div>
						{purchasedItem.toxicity && (
							<div>
								<img src={iconsAdress.toxic} alt="toxic" />
								<span>Toxic for pets</span>
							</div>
						)}
						<div></div>
					</div>
				</div>
				<div className="send-email-form">
					<div>
						<h2>Nice pick!</h2>
						<p>
							Tell us your name and e-mail and we will get in touch regarding
							your order ;)
						</p>
						<form>
							<div>
								<label htmlFor="name">Name</label>
								<input
									type="text"
									name="name"
									id="name"
									className="form-input"
									required
								/>
							</div>
							<div>
								<label htmlFor="email">Email</label>
								<input
									type="email"
									name="name"
									id="name"
									className="form-input"
									required
								/>
							</div>
							<div className="flex-end">
								<a href="#!" className="btn ghost">
									Send
								</a>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PurchasePage;
