module.exports = () => {
  return {
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
        resolve: 'gatsby-theme-chronoblog',
        options: {
          uiText: {
            // ui text fot translate
            feedShowMoreButton: '↓ show more ↓',
            feedSearchPlaceholder: 'search',
            cardReadMoreButton: 'read more →',
            allTagsButton: 'all tags'
          }
        }
      }
    ]
  };
};
