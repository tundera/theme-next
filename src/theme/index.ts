import { swiss, deep, dark } from '@theme-ui/presets';
import nightOwl from '@theme-ui/prism/presets/night-owl.json';

export const purpsGold = {
  colors: {
    background: '#643296',
    muted: '#FCE478',
    highlight: '#FCE478',
    primary: '#542382',
    secondary: '#FFB928',
    text: '#FFB928',
  },
};

export default {
  ...swiss,
  useCustomProperties: true,
  useColorSchemeMediaQuery: true,
  colors: {
    ...swiss.colors,
    modes: {
      dark: {
        ...dark.colors,
      },
      deep: {
        ...deep.colors,
      },
      light: {
        ...swiss.colors,
      },
      purpsGold: {
        ...purpsGold.colors,
      },
    },
  },
  layout: {
    container: {
      maxWidth: 1024,
      mx: 'auto',
      py: 3,
      px: 4,
    },
  },
  buttons: {
    primary: {
      cursor: 'pointer',
    },
  },
  links: {
    nav: {
      fontFamily: 'body',
    },
  },
  code: {
    ...nightOwl,
  },
};
