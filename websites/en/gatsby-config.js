module.exports = {
  siteMetadata: {
    siteTitle: 'Ivan Ganev',
    siteDescription: 'Ivan Ganev personal website',
    siteImage: '/banner-en.jpg',
    siteUrl: 'https://www.ganevdev.com',
    pathPrefix: '/',
    siteLanguage: 'en',
    ogLanguage: `en_US`,
    author: 'Ivan Ganev',
    authorDescription: 'web developer',
    avatar: '/avatar.jpg',
    twitterSite: '@ganevru',
    twitterCreator: '@ganevru',
    social: [
      {
        icon: 'github',
        url: 'https://github.com/Ganevru'
      },
      {
        icon: 'twitter',
        url: 'https://twitter.com/Ganevru'
      }
    ]
  },
  plugins: [
    {
      resolve: 'gatsby-theme-ganevru',
      options: {
        uiText: {
          // ui text fot translate
          feedShowMoreButton: 'show more',
          feedSearchPlaceholder: 'search',
          cardReadMoreButton: 'read more →',
          allTagsButton: 'all tags'
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Chronoblog Gatsby Theme`,
        short_name: `Chronoblog`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#3a5f7d`,
        display: `standalone`,
        icon: `src/assets/favicon.jpg`
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`
    }
  ]
};
