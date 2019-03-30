import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Navbar from "../components/navbar";
import meetTheCaptain from "../images/bg-img/meet-the-captain.jpg";
import captainChris from "../images/erie-big.jpg";

const MeetTheCaptain = () => (
	<Layout>
		<section
			className="hero is-large"
			style={{
				backgroundImage: `linear-gradient(rgba(110, 118, 122, 0.5), rgba(110, 118, 122, 0.5)), url(${meetTheCaptain})`,
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
									Meet The Captain
								</h1>
							</div>
						</div>
					</article>
				</div>
			</div>
		</section>
		<section className="section meet-the-captain">
			<div className="container">
				<div className="columns">
					<p>
						<strong>
							Captain Chris Johnson spends approximately 150 days a year on the
							water
						</strong>{" "}
						guiding, competing in fishing tournaments, and learning, all while
						sharing his knowledge with others to provide a better opportunity
						for his clients to have a successful and enjoyable day on the water.
						Captain Chris is one of most accomplished and recognized anglers in
						Wisconsin and is often called on to field test new products, provide
						opportunities for photos for various media, or even shooting TV
						shows. Fishcrazy Guide Service is committed to making your trip with
						us first-rate. We can assist with food, lodging, and entertainment.
					</p>
				</div>
				<figure className="image" />

				<div className="columns is-vcentered">
					<div className="column is-half">
						<p>
							If you are interested in experiencing some of the other fantastic
							fishing available around Door County, Captain Chris would be happy
							to assist you in finding a species-specific guide that you are
							sure to enjoy. Few areas in North America, let alone the Midwest,
							can match the fishing opportunities available in and around the
							Door County Peninsula of Wisconsin. The quality and quantity of
							the smallmouth bass fishery available is no exception. Not only is
							the smallmouth fishing second to none, but the scenery is
							spectacular!
						</p>
					</div>
					<div className="column is-half">
						<figure className="image">
							<img
								className=" meet-chris"
								src={captainChris}
								alt="Captain Chris Johnson"
							/>
						</figure>
					</div>
				</div>

				<div className="columns">
					<p>
						If you are thinking about taking advantage of this truly fantastic
						opportunity you have come to the right place. Captain Chris Johnson
						of Fishcrazy Guide Service knows where the big ones are biting in
						and around the entire Door County Peninsula of Wisconsin and can put
						you on the best smallie experience of your life. We practice a
						strict catch and release only policy with Smallmouth. If you catch a
						trophy we will take many photos and measurements so you can have a
						replica made by many of the local taxidermists. Captain Chris
						Johnson is also available for seminars as well. Be it a fishing
						club, on the water clinic for a group, individual, or school event,
						he is able to put together a presentation that will both educate and
						entertain your audience.
					</p>
				</div>
				<Link to="/" className="button is-large is-primary">
					Book Your Trip Today
				</Link>
			</div>
		</section>
	</Layout>
);

export default MeetTheCaptain;
