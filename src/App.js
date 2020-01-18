import React, { useState, useEffect } from "react";
import "./styles/App.css";
import "./styles/mobile.css";

import Header from "./components/layout/Header";

import HomePage from "./components/pages/HomePage";
import FirstQuestion from "./components/pages/FirstQuestion";
import SecondQuestion from "./components/pages/SecondQuestion";
import ThirdQuestion from "./components/pages/ThirdQuestion";
import QuestionResults from "./components/pages/QuestionResults";
import PurchasePage from "./components/pages/PurchasePage";

function App() {
	const [step, setStep] = useState(1);

	const [firstAnswer, setFirstAnswer] = useState(null);
	const [secondAnswer, setSecondAnswer] = useState(null);
	const [thirdAnswer, setThirdAnswer] = useState(null);

	const [purchasedItem, setPurchasedItem] = useState(null);

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
					<FirstQuestion
						changeStep={changeStep}
						setFirstAnswer={setFirstAnswer}
						firstAnswer={firstAnswer}
					/>
				</div>
			);
		case 3:
			return (
				<div className="App">
					<Header verticalHeader={verticalHeader} />
					<SecondQuestion
						changeStep={changeStep}
						setSecondAnswer={setSecondAnswer}
						secondAnswer={secondAnswer}
					/>
				</div>
			);
		case 4:
			return (
				<div className="App">
					<Header verticalHeader={verticalHeader} />
					<ThirdQuestion
						changeStep={changeStep}
						setThirdAnswer={setThirdAnswer}
						thirdAnswer={thirdAnswer}
					/>
				</div>
			);

		case 5:
			return (
				<div className="App">
					<Header verticalHeader={verticalHeader} />
					<QuestionResults
						firstAnswer={firstAnswer}
						secondAnswer={secondAnswer}
						thirdAnswer={thirdAnswer}
						changeStep={changeStep}
						setPurchasedItem={setPurchasedItem}
					/>
				</div>
			);

		case 6:
			return (
				<div className="App">
					<Header verticalHeader={verticalHeader} />
					<PurchasePage purchasedItem={purchasedItem} />
				</div>
			);

		default:
			return "";
	}
}

export default App;
