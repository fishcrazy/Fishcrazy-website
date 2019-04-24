module.exports = {
	siteMetadata: {
		title: "Fishcrazy Guide Service",
		author: "Fishcrazy",
		imageUrl: "https://i.imgur.com/Vz81GEl.png",
		description: "Smallmouth Bass Fishing Guide in Door County, WI",
		keywords: `Door County Fishing Charter, Smallmouth bass fishing charter, Chris Johnson Fishing`,
		siteUrl: `https://fishcrazygs.com`
	},
	plugins: [
		"gatsby-plugin-react-helmet",
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		"gatsby-transformer-sharp",
		"gatsby-plugin-sharp",
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: "Makefolio",
				short_name: "Makefolio",
				start_url: "/",
				background_color: "##34495e",
				theme_color: "##34495e",
				display: "standalone",
				icon: "src/images/fish-icon.png",
				orientation: "portrait"
			}
		},
		`gatsby-plugin-sass`,
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: "UA-XXXXXXXX-X",
				// Setting this parameter is optional (requried for some countries such as Germany)
				anonymize: true
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `gallery`,
				path: `${__dirname}/src/images/gallery`
			}
		},
		`gatsby-plugin-sitemap`
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.app/offline
		// 'gatsby-plugin-offline',
	]
};
