import React from "react";
import { StaticQuery, graphql } from "gatsby";

const GalleryData = ({ query }) => {
	return <h1>{}</h1>;
};

export default () => (
	<StaticQuery
		query={graphql`
			query {
				allFile(filter: { relativeDirectory: { eq: "gallery" } }) {
					edges {
						node {
							relativePath
							childImageSharp {
								id
							}
						}
					}
				}
			}
		`}
		render={data => (
			<header>
				<h1>This is the data</h1>
			</header>
		)}
	/>
);
