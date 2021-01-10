module.exports = {
  siteMetadata: {
    title: `Reece Gordon`,
    description: `The personal portfolio website for Reece Gordon, more specific contact details can be found within the CV.`,
    author: `@gatsbyjs`,
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
    "gatsby-plugin-theme-ui",
    `gatsby-theme-style-guide`,
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
        icon: `src/images/reece1.jpg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Droid Sans', 'Droid Serif', 'Big Shoulders Inline Text:bold', 'Architects Daughter', 'Indie Flower', 'Caveat', 'Kalam', 'Montserrat', 'Big Shoulders Stencil Display']
        }
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
