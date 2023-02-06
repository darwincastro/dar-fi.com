/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `dar-fi.com`,
    siteUrl: `https://www.dar-fi.com/`,
  },
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-image',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'dar-fi.com',
        short_name: 'dar-fi.com',
        start_url: '/',
        icon: './src/static/favicon.png',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'static',
        path: './src/static/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
  ],
};
