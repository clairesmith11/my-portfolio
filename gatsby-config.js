module.exports = {
  siteMetadata: {
    title: "Claire Smith Developer Portfolio",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "project",
        path: "./data",
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "image",
        path: `${__dirname}/src/images/`
      }
    },
    "gatsby-transformer-json"
  ],
};
