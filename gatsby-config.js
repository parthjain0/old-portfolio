module.exports = {
  siteMetadata: {
    author: 'Parth Jain',
    description: 'Web developer Portfolio - Parth Jain',
    keywords: 'HTML5,CSS3,JavaScript,React,Gatsby',
    siteUrl: 'https://www.parthjain.xyz',
    title: 'Parth Jain',
  },
  plugins: [
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
  ],
};
