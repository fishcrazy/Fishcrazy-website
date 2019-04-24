import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Navbar from "../components/navbar";
import RatesInfoBg from "../images/bg-img/rates-and-info.jpg";

const RatesAndInfo = () => (
	<Layout>
		<section
			className="hero is-large"
			style={{
				backgroundImage: `linear-gradient(rgba(110, 118, 122, 0.5), rgba(110, 118, 122, 0.5)), url(${RatesInfoBg})`,
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
									Guide Rates &amp; Info
								</h1>
							</div>
						</div>
					</article>
				</div>
			</div>
		</section>
		<section className="section rates-section">
			<div className="container">
				<div className="columns has-text-centered">
					<div className="column rates-container">
						<h2 className="is-size-2">Fishcrazy Guide Service Rates</h2>
						<p className="is-size-5">
							Rates include up to 2 guests. Additional persons may be added for
							$50 each
						</p>
						<h3 className="is-size-4">Half Day: 4-5 hour trip</h3>
						<p className="price">$375</p>
						<h3 className="is-size-4">Full Day: 8-9 hour trip</h3>
						<p className="price">$500</p>
						<Link to="/contact" className="button is-medium is-primary">
							Book Your Trip
						</Link>
						<hr />
						<p>Need bait &amp; tackle on your way?</p>
						<a
							className="button is-primary is-outlined is-medium"
							href="http://www.howiestackle.com/"
						>
							Visit Howie's Tackle
						</a>
					</div>
				</div>
			</div>
		</section>
		<section className="section">
			<div className="container">
				<div className="columns">
					<div className="column">
						<h3 className="is-size-3 info-title">Launch Locations</h3>
						<a href="https://drive.google.com/open?id=1NtcfmShuVWqCQrpKye7xKNUgzzV0rv6k&usp=sharing">
							View in Google Maps
						</a>
						<div className="iframe-container">
							<iframe
								src="https://www.google.com/maps/d/embed?mid=1NtcfmShuVWqCQrpKye7xKNUgzzV0rv6k"
								title="map"
								width="500"
								height="500"
								className="responsive-iframe"
							/>
						</div>
					</div>
					<div className="column what-to-bring">
						<h4 className="is-size-3 info-title">What to Bring</h4>
						<p>
							We encourage everyone to bring a number of personal items on your
							trip to make your time more enjoyable and productive, these items
							include:
						</p>
						<ul className="list item-checklist floating-image">
							<li className="list-item">
								Wisconsin Fishing License (required)
							</li>
							<li className="list-item">Soft Soled Shoes (required)</li>
							<li className="list-item">Sunglasses and Sunscreen</li>
							<li className="list-item">Seasonal clothing with hat</li>
							<li className="list-item">Rain Suit (just in case!)</li>
							<li className="list-item">Camera</li>
							<li className="list-item">Food and beverages</li>
						</ul>
					</div>
				</div>
				<div className="columns is-vcentered">
					<div className="column places-container">
						<h4 className="is-size-3 info-title">Places to Eat</h4>
						<ul>
							<li>
								<a href="http://greystonecastlebar.com/">Greystone Castle</a>
							</li>
							<li>
								<a href="http://www.sonnyspizzeria.com/">Sonny's Pizzeria</a>
							</li>
							<li>
								<a href="http://nightingalesupperclub.com/">
									Nightingale Supper Club
								</a>
							</li>
							<li>
								<a href="http://www.villaggios-doorcounty.com/">Villaggio's</a>
							</li>
							<li>
								<a href="http://www.aljohnsons.com/">Al Johnson's</a>
							</li>
							<li>
								<a href="http://fredandfuzzys.com/">Fred and Fuzzy's</a>
							</li>
						</ul>
						<hr className="divider-tiny" />
						<h4 className="is-size-3 info-title">Places to Stay</h4>
						<ul>
							<li>
								<a href="http://www.americinn.com/hotels/wi/sturgeonbay?utm_source=google&utm_medium=local_listing&utm_campaign=google_local_page&chebs=ai_gl">
									AmericInn Sturgeon Bay
								</a>
							</li>
							<li>
								<a href="http://www.stoneharbor-resort.com/">
									Stone Harbor Resort
								</a>
							</li>
						</ul>
					</div>
					<div className="column what-to-expect">
						<h4 className="is-size-3 info-title">What to Expect</h4>
						<p>
							Fishcrazy Guide Service will accommodate you requests and can fish
							anywhere around Door County. This includes the waters of Green
							Bay, Lake Michigan and around Washington Island. We can pick you
							up at your location or meet you at any of the boat ramps in the
							listed locations.
						</p>
						<p>
							You will be fishing with top of the line equipment and all
							required lures and baits are provided. Enjoy the best ride in the
							bass boat industry aboard the most stable fishing platform
							available anywhere in a fully rigged Triton 24’ LTS240 Bay Boat
							powered by a Mercury 300 Verado.
						</p>
					</div>
				</div>
			</div>
		</section>
	</Layout>
);

export default RatesAndInfo;
