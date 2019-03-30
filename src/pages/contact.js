import React from "react";
import Layout from "../components/layout";
import Navbar from "../components/navbar";
import contactBg from "../images/bg-img/contact.jpg";
const Contact = () => (
	<Layout>
		<section
			className="hero is-large"
			style={{
				backgroundImage: `linear-gradient(rgba(110, 118, 122, 0.5), rgba(110, 118, 122, 0.5)), url(${contactBg})`,
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
									Contact Us
								</h1>
							</div>
						</div>
					</article>
				</div>
			</div>
		</section>
		<section className="section has-background-light">
			<div className="container">
				<div className="columns">
					<div className="column has-text-centered">
						<h2 className="is-size-2">Make Your Reservation Today!</h2>
						<p className="is-size-5">
							Simply fill out the form below, and we will be in touch to discuss
							your trip.
						</p>
					</div>
				</div>
				<div className="columns is-vcentered">
					<div className="column">
						<form className="box">
							<div className="field">
								<label className="label">Name</label>
								<div className="control has-icons-left">
									<input
										type="text"
										className="input"
										placeholder="Enter Full Name"
										required
									/>
								</div>
							</div>
							<div className="field">
								<label className="label">Email</label>
								<div className="control has-icons-left">
									<input
										type="email"
										className="input"
										placeholder="e.g. address@email.com"
									/>
								</div>
							</div>
							<div className="field">
								<label className="label">Subject</label>
								<div className="control has-icons-left">
									<input
										type="text"
										className="input"
										placeholder="Message Subject"
										required
									/>
								</div>
							</div>
							<div className="field">
								<label className="label">Message</label>
								<div className="control has-icons-left">
									<input
										type="textarea"
										className="textarea"
										placeholder="Enter message"
										required
									/>
								</div>
							</div>
							<div className="field">
								<button className="button is-primary">Submit</button>
							</div>
						</form>
					</div>
					<div className="column contact-info">
						<div class="card floating-image">
							<header class="card-header">
								<p class="card-header-title">Contact Info</p>
							</header>
							<div class="card-content">
								<div class="content">
									<p>Chris Johnson</p>
									<p>920-475-1474</p>
									<p>fishcrazy@fishcrazygs.com</p>
									<p>
										1600 Roosevelt St <br />
										Little Chute, WI 54140
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</Layout>
);

export default Contact;
