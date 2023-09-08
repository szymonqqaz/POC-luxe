require("dotenv").config();

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `POC-luxe`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    {
      resolve: "gatsby-source-prismic",
      /**
       * @type {import("gatsby-source-prismic").PluginOptions}
       */
      options: {
        repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
        // accessToken: process.env.PRISMIC_ACCESS_TOKEN,
        customTypesApiToken: process.env.PRISMIC_CUSTOM_TYPES_API_TOKEN,
        // routes: [
        //   {
        //     type: "article",
        //     path: "/articles/:uid",
        //   },
        //   {
        //     type: "page",
        //     path: "/:uid",
        //   },
        // ],
      },
    },
  ],
}
