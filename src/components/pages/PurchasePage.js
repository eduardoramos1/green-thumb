import React, { useEffect, useState } from "react";

import noAnswer from "./../../assets/icons/grey/no-answer.svg";
import highSun from "./../../assets/icons/grey/high-sun.svg";
import oneDrop from "./../../assets/icons/grey/one-drop.svg";
import toxic from "./../../assets/icons/grey/toxic.svg";
import lowSun from "./../../assets/icons/grey/low-sun.svg";
import twoDrops from "./../../assets/icons/grey/two-drops.svg";
import threeDrops from "./../../assets/icons/grey/three-drops.svg";
import alert from "./../../assets/icons/red/alert.svg";

import envelop from "./../../assets/illustrations/envelop.png";

const PurchasePage = ({ purchasedItem }) => {
	const [visibility, setVisibility] = useState(false);

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [nameError, setNameError] = useState(false);
	const [emailError, setEmailError] = useState(false);
	const [purchaseFinished, setPurchaseFinished] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setVisibility(true);
		}, 300);
		document.body.classList.add("bg-white");
		document.querySelector("html").classList.add("bg-white");
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

	const onSubmit = async (name, email) => {
		if (!name) return setNameError(true);
		if (!email) return setEmailError(true);

		// check if email format is valid
		const regex = /\S+@\S+\.\S+/;
		if (regex.test(email)) {
			try {
				const url =
					"https://6nrr6n9l50.execute-api.us-east-1.amazonaws.com/default/front-plantTest-service";
				const body = {
					name,
					email,
					id: 1
				};

				await fetch(url, {
					method: "POST",
					body: JSON.stringify(body)
				});

				setEmailError(false);
				setNameError(false);

				return setPurchaseFinished(true);
			} catch (error) {
				console.log(error);
			}
		} else {
			return setEmailError(true);
		}
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
					{!purchaseFinished && (
						<div>
							<h2>Nice pick!</h2>
							<p>
								Tell us your name and e-mail and we will get in touch regarding
								your order ;)
							</p>
							<form>
								<div className="mb-1">
									<label htmlFor="name">Name</label>
									<input
										type="text"
										name="name"
										id="name"
										onChange={ev => setName(ev.target.value)}
										className={
											nameError ? "form-input input-error" : "form-input"
										}
										required
									/>
									{nameError && (
										<div className="alert-message">
											<img src={alert} alt="alert" /> This field is required
										</div>
									)}
								</div>
								<div className="mb-1">
									<label htmlFor="email">Email</label>
									<input
										type="email"
										name="name"
										id="name"
										onChange={ev => setEmail(ev.target.value)}
										className={
											emailError ? "form-input input-error" : "form-input"
										}
										required
									/>
									{emailError && (
										<div className="alert-message">
											<img src={alert} alt="alert" /> Please, enter a valid
											e-mail
										</div>
									)}
								</div>
								<div className="flex-end">
									<a
										href="#!"
										className="btn ghost"
										onClick={() => onSubmit(name, email)}
									>
										Send
									</a>
								</div>
							</form>
						</div>
					)}

					{purchaseFinished && (
						<React.Fragment>
							<h2>Thank You!</h2>
							<p className="finished-purchase-detail">
								You will hear from us soon please check your email!
							</p>

							<img src={envelop} alt="envelop" />
						</React.Fragment>
					)}
				</div>
			</div>
		</div>
	);
};

export default PurchasePage;
