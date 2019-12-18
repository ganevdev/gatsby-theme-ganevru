module.exports = {
  siteMetadata: {
    siteTitle: 'Иван Ганев',
    siteDescription: 'Сайт Ивана Ганева',
    siteImage: '/banner-en.jpg',
    siteUrl: 'https://www.ganev.ru',
    siteLanguage: 'ru', // ru
    ogLanguage: `ru_RU`,
    author: 'Иван Ганев',
    authorDescription: 'веб разработчик',
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
          feedShowMoreButton: '↓ показать больше ↓',
          feedSearchPlaceholder: 'поиск',
          cardReadMoreButton: 'читать дальше →',
          allTagsButton: 'все теги'
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Сайт Ивана Ганева`,
        short_name: `Иван Ганев`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#3a5f7d`,
        display: `standalone`,
        icon: `src/assets/favicon.jpg`
      }
    }
  ]
};
