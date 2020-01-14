import React from "react";

import Logo from "./../../assets/logo/logo-greenthumb.svg";

const Header = ({ horizontalHeader, verticalHeader }) => {
	return (
		<React.Fragment>
			<header className={horizontalHeader || verticalHeader}>
				<img src={Logo} alt="green-thumb" className="logo" />
			</header>

			{verticalHeader && <div className="vertical-line"></div>}
		</React.Fragment>
	);
};

export default Header;
