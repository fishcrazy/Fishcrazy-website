import React from "react";
import "./style.scss";
import Navbar from "./navbar";
import indexbg from "../images/bg-img/index.jpg";

const Header = ({ siteTitle }) => (
	<section
		className="hero is-large"
		style={{
			backgroundImage: `url(${indexbg})`,
			backgroundSize: "cover",
			backgroundRepeat: "no-repeat"
		}}
	>
		<Navbar />
		<div className="hero-body">
			<div className="container center">
				<article className="media">
					<div className="media-content">
						<div className="content has-text-centered">
							<h1 className="is-uppercase is-size-1 has-text-white">
								Experience the best bass fishing Door County has to offer
							</h1>
						</div>
					</div>
				</article>
			</div>
		</div>
	</section>
);

export default Header;
