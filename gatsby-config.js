module.exports = {
  siteMetadata: {
    title: "Fundación Alicia Alonso",
    author: "Enrique Velasco",
    description: "Sitio Web Oficial de la Fundación Alicia Alonso"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Cormorant Garamond\:100,400,800`, // you can also specify font weights and styles
        ],
        display: 'swap',
      },
    }
  ],
}
