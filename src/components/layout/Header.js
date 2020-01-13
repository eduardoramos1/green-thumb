import React from "react";

import Logo from "./../../assets/logo/logo-greenthumb.svg";

const Header = () => {
	return (
		<header className="flex-item-center">
			<img src={Logo} alt="green-thumb" className="logo" />
		</header>
	);
};

export default Header;
