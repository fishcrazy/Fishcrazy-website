import React from "react";

import "./style.scss";
import Helmet from "./helmet";
import Footer from "./footer";

const Layout = ({ children }) => (
	<div>
		<Helmet />
		{children}
		<Footer />
	</div>
);

export default Layout;
