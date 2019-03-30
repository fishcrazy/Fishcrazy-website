import React from "react";
import Layout from "../components/layout";
import Navbar from "../components/navbar";
import { graphql } from "gatsby";
import Img from "gatsby";
import galleryBg from "../images/bg-img/gallery.jpg";

const Gallery = ({ data }) => (
	<Layout>
		<section
			className="hero is-medium"
			style={{
				backgroundImage: `linear-gradient(rgba(110, 118, 122, 0.5), rgba(110, 118, 122, 0.5)), url(${galleryBg})`,
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
									Gallery
								</h1>
							</div>
						</div>
					</article>
				</div>
			</div>
		</section>
		<section className="section">
			<div className="container">
				<div className="columns is-multiline is-vcentered">
					{data.allFile.edges.map(({ node }, index) => (
						<div className="column is-one-third">
							<img key={index} src={node.childImageSharp.resize.src} />
						</div>
					))}
				</div>
			</div>
		</section>
	</Layout>
);

export const query = graphql`
	query {
		allFile(filter: { relativeDirectory: { eq: "gallery" } }) {
			edges {
				node {
					relativePath
					childImageSharp {
						id
						resize {
							src
						}
					}
				}
			}
		}
	}
`;

export default Gallery;
