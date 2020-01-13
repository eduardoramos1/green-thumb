import React from "react";
import "./styles/App.css";
import "./styles/mobile.css";

import Header from "./components/layout/Header";

import HomePage from "./components/pages/HomePage";

function App() {
	return (
		<div className="App">
			<Header />

			<HomePage />
		</div>
	);
}

export default App;
