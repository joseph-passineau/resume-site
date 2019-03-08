module.exports = {
  siteMetadata: {
    title: `My Portfolio`,
    description: `This is my resume website.`,
    author: `Joseph Henry Passineau`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/content/assets`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/content/assets/me.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`
  ],
}
