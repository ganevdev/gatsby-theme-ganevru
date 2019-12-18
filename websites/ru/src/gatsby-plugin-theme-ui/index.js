import chronoblogTheme from 'gatsby-theme-chronoblog/src/gatsby-plugin-theme-ui';

export default {
  ...chronoblogTheme,
  initialColorMode: 'light',
  useColorSchemeMediaQuery: false,
  colors: {
    ...chronoblogTheme.colors,
    text: '#111',
    primary: '#3c40c6',
    secondary: '#575fcf',
    muted: '#dae1e3',
    modes: {
      dark: {
        ...chronoblogTheme.colors.modes.dark,
        muted: '#161b1d'
      }
    }
  },
  fonts: {
    ...chronoblogTheme.fonts,
    body: '-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace'
  }
};
