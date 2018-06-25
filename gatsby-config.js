module.exports = {
  siteMetadata: {
    title: 'Gucode',
    author: 'Net and Pondd',
    description: 'Awesome Youtube Channel',
    siteUrl: 'https://gucodelive.github.io',
  },
  pathPrefix: '/',
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-121316446-1`,
      },
    },
    `gatsby-plugin-feed`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    {
      resolve: `gatsby-source-youtube`,
      options: {
        channelId: 'UC2e64YsO3vH8LAP7OJxfmdQ',
        apiKey: 'AIzaSyAccJ8PhQvpLMk-4EBpjZBHiZtIsMuDlPU',
        maxVideos: 50, // Defaults to 50
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "GuCode",
        short_name: "GuCode",
        start_url: "/",
        background_color: "#f7f0eb",
        theme_color: "#F8F458",
        display: "minimal-ui",
        icon: "src/logo.png", // This path is relative to the root of the site.
      },
    }
  ],
}
