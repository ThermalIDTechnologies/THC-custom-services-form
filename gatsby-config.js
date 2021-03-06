require('dotenv').config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `THC Label Solutions Custom Services`,
    description: `THC Label & Packaging Solutions is your one-stop-shop for custom labels and packaging needs. We have you covered from printers, labels, applicators, packaging, signage or branding creation. Focus your attention on crafting the ideal product, while we handle the rest.`,
    author: `THC Label Solutions`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `thc-label-solutions-custom-services-page`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#497638`,
        theme_color: `#497638`,
        display: `minimal-ui`,
        icon: `src/images/thc-logo@300x.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-apollo`,
      options: {
        uri: `https://api.monday.com/v2/`,
        headers: {
          Authorization: `${process.env.MONDAY_API_TOKEN}`,
        },
      },
    },
    `gatsby-plugin-styled-components`,
    // {
    //   resolve: "gatsby-transformer-cloudinary",
    //   options: {
    //     cloudName: "crjars",
    //     apiKey: `${process.env.CLOUDINARY_API_KEY}`,
    //     apiSecret: `${process.env.CLOUDINARY_API_SECRET}`,

    //     // This folder will be created if it doesn’t exist.
    //     uploadFolder: "gatsby-cloudinary",
    //   },
    // },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Raleway:500`, // you can also specify font weights and styles
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-83589888-1",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
