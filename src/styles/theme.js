// App THEME.

export const THEME = {
  colors: {
    primary: '#192954',
    secondary: '#333761',
    tertiary: '#8490C8',
    quaternary: '#D5D9E3',
    quinary: '#EEEDF6'
  },
  fontFamily: {
    default: '"Cairo", sans-serif',
    cairo: '"Cairo", sans-serif',
    IBM: '"IBM Plex Sans Arabic", sans-serif'
  },
  fontSizes: {
    small: '1rem',
    medium: '1.2rem',
    large: '2rem',
    xLarge: '3rem'
  },
  media: {
    mobile: '(max-width: 768px)',
    tablet: '(max-width: 1200px)',
    desktop: '(min-width: 1200px)'
  }
};

export const DARK_THEME = {
  ...THEME,
  colors: {
    ...THEME.colors,
    primary: '#EEEDF6',
    secondary: '#D5D9E3',
    tertiary: '#8490C8',
    quaternary: '#333761',
    quinary: '#192954'
  }
};
