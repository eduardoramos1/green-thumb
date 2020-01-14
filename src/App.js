import React, { useState, useEffect } from "react";
import "./styles/App.css";
import "./styles/mobile.css";

import Header from "./components/layout/Header";

import HomePage from "./components/pages/HomePage";
import FirstQuestion from "./components/pages/FirstQuestion";

function App() {
	const [step, setStep] = useState(1);

	const horizontalHeader = "flex-item-center";
	const verticalHeader = "desktop-vertical-header";

	useEffect(() => {
		console.log(step);
	}, [step]);

	const changeStep = step => {
		setStep(step);
	};

	switch (step) {
		case 1:
			return (
				<div className="App">
					<Header horizontalHeader={horizontalHeader} />
					<HomePage changeStep={changeStep} />
				</div>
			);
		case 2:
			return (
				<div className="App">
					<Header verticalHeader={verticalHeader} />
					<FirstQuestion changeStep={changeStep} />
				</div>
			);
		default:
			return "";
	}
}

export default App;
