import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Navbar from "../components/navbar";
import indexbg from "../images/bg-img/index.jpg";
import smallmouthBass1 from "../images/smallmouth-bass-1.jpg";
import mac2 from "../images/mac-2.jpg";
import meetTheCaptain from "../images/captain-chris.jpg";
import galleryImg from "../images/bg-img/gallery.jpg";
import contactImg from "../images/bg-img/contact.jpg";
import fourSmallies from "../images/four-smallies.jpg";
import bgPattern from "../images/fishing-pattern.svg";

const IndexPage = () => (
	<Layout>
		<section
			className="hero is-large"
			style={{
				backgroundImage: `linear-gradient(rgba(110, 118, 122, 0.5), rgba(110, 118, 122, 0.5)),url(${indexbg})`,
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
		<section className="section has-background-light">
			<div className="container">
				<div className="columns is-vcentered">
					<div className="column half-text">
						<h2 className="is-size-3">
							Chris Johnson <br />
							Professional Guide and Tournament Angler
						</h2>
						<hr className="divider-bar" />
						<p>
							Captain Chris Johnson of Fishcrazy Guide Service is the go-to
							guide if you are looking to experience the best bass fishing
							Sturgeon Bay and Door County have to offer. Captain Chris does not
							run walleye, salmon, or trout charters just to make ends meet or
							fill out a schedule; we only guide for smallmouth bass, and no one
							does it better in and around Door County!
						</p>
						<Link
							to="/rates-and-info"
							className="button two-by-two is-medium is-primary"
						>
							See Rates &amp; Info
						</Link>
					</div>
					<div className="column">
						<img
							src={smallmouthBass1}
							alt="Captain Chris Johnson"
							className="floating-image"
						/>
					</div>
				</div>
			</div>
		</section>
		<section className="section has-background-light">
			<div className="container">
				<div className="columns is-vcentered">
					<div className="column">
						<img src={mac2} alt="Smallmouth Bass" className="floating-image" />
					</div>
					<div className="column half-text">
						<h2 className="is-size-3">A Charter Experience Like No Other</h2>
						<hr class="divider-bar" />
						<p>
							During your day on the water, Captain Chris will provide a
							complete outdoor experience that you’ll remember fondly for many
							years to come. He’ll spare no effort to produce fish, with a
							never-say-die, can-do attitude. Besides catching fish, you will
							receive on-the-water education with the latest tournament
							techniques, tips, and proven seasonal patterns that he has
							developed over the years guaranteed to help you catch more
							smallmouth anywhere in the country, and most certainly on your
							local waters. A day on the water should be as much about learning,
							laughing, and enjoying each others’ company surrounded by the
							spectacular scenery while catching the wildly acrobatic, hard
							fighting smallmouth bass.
						</p>
						<Link
							to="/contact"
							className="button two-by-two is-medium is-primary"
						>
							Book Your Trip Today
						</Link>
					</div>
				</div>
			</div>
		</section>
		<section className="section has-background-light">
			<div className="container">
				<div className="columns">
					<div className="column has-text-centered">
						<h2 className="title">About Fishcrazy Guide Service</h2>
					</div>
				</div>
				<div className="columns">
					<div className="column">
						<div className="card floating-card">
							<div className="card-image">
								<figure className="image is-4by3">
									<img src={meetTheCaptain} />
								</figure>
							</div>
							<div className="card-content">
								<h3 className="is-size-4">Meet The Captain</h3>
								<div className="content">
									Meet Captain Chris Johnson, tournament angler and the go-to
									Smallmouth Bass guide in Door County, Wisconsin
									<br />
									<Link
										to="/meet-the-captain"
										className="button card-link is-primary is-outlined"
									>
										Learn More
									</Link>
								</div>
							</div>
						</div>
					</div>
					<div className="column">
						<div className="card floating-card">
							<div className="card-image">
								<figure className="image is-4by3">
									<img src={fourSmallies} />
								</figure>
							</div>
							<div className="card-content">
								<h3 className="is-size-4">Gallery</h3>
								<div className="content">
									From novices to old pros, families and friends or even
									tournament anglers, everyone will enjoy a day in the boat with
									Chris.
									<br />
									<Link
										to="/gallery"
										className="button card-link is-primary is-outlined"
									>
										View Gallery
									</Link>
								</div>
							</div>
						</div>
					</div>
					<div className="column">
						<div className="card floating-card">
							<div className="card-image">
								<figure className="image is-4by3">
									<img src={galleryImg} />
								</figure>
							</div>
							<div className="card-content">
								<h3 className="is-size-4">Contact</h3>
								<div className="content">
									What are you waiting for? Let's follow the fish and take
									advantage of hot bites on Sturgeon Bay, Green Bay or Lake
									Michigan! <br />
									<Link
										to="/contact"
										className="button card-link is-primary is-outlined"
									>
										Contact Us
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section>
			<div
				className="container has-text-centered is-fullhd"
				style={{
					backgroundImage: `linear-gradient(rgba(110, 118, 122, 0.5), rgba(110, 118, 122, 0.5)),url(${contactImg})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat"
				}}
			>
				<div className="columns">
					<div className="column guide-text-container">
						<div className="home-guide-text">
							<h3 className="is-size-3">Why Hire a Guide?</h3>
							<p className="is-size-4">
								Fishermen of all skill levels can benefit from a guided trip.
								Learn how a guide can help you become a better angler:
							</p>
							<Link
								to="/contact"
								className="button is-large is-primary two-by-two"
							>
								Read More
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section
			className="section contact-section"
			style={{
				backgroundImage: `url(${bgPattern})`,
				backgroundRepeat: "repeat"
			}}
		>
			<div className="container has-text-centered">
				<div className="columns is-vcentered">
					<div className="column">
						<div>
							<h3 className="is-size-3 is-primary">Ready to get started?</h3>
							<Link
								to="/contact"
								className="button is-large is-primary two-by-two"
							>
								Contact Us
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	</Layout>
);

export default IndexPage;
