// theme.js
import { createTheme } from '@mui/material/styles';
import { arSD } from '@mui/material/locale';

export const THEME = {
  colors: {
    primary: '#192954',
    secondary: '#333761',
    tertiary: '#8490C8',
    quaternary: '#D5D9E3',
    quinary: '#EEEDF6',
  },
  fontFamily: {
    default: '"Cairo", sans-serif',
    cairo: '"Cairo", sans-serif',
    IBM: '"IBM Plex Sans Arabic", sans-serif',
  },
  media: {
    mobile: 0, // max-width: 768px → "xs"
    tablet: 768, // max-width: 1200px → "sm"
    desktop: 1200, // min-width: 1200px → "md" and up
  },
};

// MUI Theme with RTL, breakpoints, colors, fonts
export const muiTheme = createTheme(
  {
    direction: 'rtl',
    // breakpoints: {
    //   values: {
    //     xs: THEME.media.mobile,
    //     sm: THEME.media.tablet,
    //     md: THEME.media.desktop,
    //     lg: 1440,
    //     xl: 1920,
    //   },
    // },
    palette: {
      primary: { main: THEME.colors.primary },
      secondary: { main: THEME.colors.secondary },
      tertiary: { main: THEME.colors.tertiary },
      quaternary: { main: THEME.colors.quaternary },
      quinary: { main: THEME.colors.quinary },
    },
    typography: {
      fontFamily: THEME.fontFamily.cairo,
      IBM: THEME.fontFamily.IBM,
      fontSize: 16,
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            direction: 'rtl',
            fontFamily: THEME.fontFamily.default,
          },
        },
      },
    },
  },
  arSD
);
