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
						<form
							className="box"
							name="contact"
							method="post"
							data-netlify="true"
							data-netlify-honeypot="bot-field"
						>
							<input type="hidden" name="bot-field" />
							<input type="hidden" name="form-name" value="contact" />
							<div className="field">
								<label className="label" htmlFor="name">
									Name
								</label>
								<input className="input" type="text" name="name" id="name" />
							</div>
							<div className="field half">
								<label className="label" htmlFor="email">
									Email
								</label>
								<input className="input" type="text" name="email" id="email" />
							</div>
							<div className="field">
								<label className="label" htmlFor="message">
									Message
								</label>
								<textarea
									className="textarea"
									name="message"
									id="message"
									rows="6"
								/>
							</div>
							<ul className="actions">
								<li>
									<input
										type="submit"
										value="Send Message"
										className="special button is-primary"
									/>
								</li>
							</ul>
						</form>
					</div>
					<div className="column contact-info">
						<div class="card floating-image">
							<header className="card-header">
								<p className="card-header-title">Contact Info</p>
							</header>
							<div className="card-content">
								<div className="content">
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
