import React from "react";
import { Link } from "gatsby";

import "./style.scss";
import Logo from "../images/Logo.png";

class Navbar extends React.Component {
	constructor() {
		super();
		this.state = {
			navState: ""
		};
	}

	toggleNav = e => {
		if (this.state.navState === "") {
			this.setState({ navState: "is-active" });
		} else {
			this.setState({ navState: "" });
		}

		console.log(this.state.navState);
	};

	render() {
		return (
			<div className="hero-head">
				<nav className="navbar">
					<div className="container">
						<div className={`navbar-brand ${this.state.navState}`}>
							<a className="navbar-item" href="/">
								<img className="main-logo" src={Logo} alt="Logo" />
							</a>
							<a
								onClick={this.toggleNav}
								role="button"
								className={`navbar-burger ${this.state.navState}`}
								data-target="navMenu"
								aria-label="menu"
								aria-expanded="false"
							>
								<span aria-hidden="true" />
								<span aria-hidden="true" />
								<span aria-hidden="true" />
							</a>
						</div>
						<div id="navMenu" className={`navbar-menu ${this.state.navState}`}>
							<div className="navbar-end">
								<Link to="/" className="navbar-item">
									Home
								</Link>
								<Link to="/rates-and-info" className="navbar-item">
									Rates and Info
								</Link>
								<Link to="/meet-the-captain" className="navbar-item">
									Meet the Captain
								</Link>
								<Link to="/gallery" className="navbar-item">
									Gallery
								</Link>
								<span className="navbar-item">
									<Link to="/contact" className="button is-primary is-inverted">
										Contact
									</Link>
								</span>
							</div>
						</div>
					</div>
				</nav>
			</div>
		);
	}
}

export default Navbar;
