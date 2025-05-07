'use client';
// Import Theme Provider .
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { THEME } from '@/styles/theme';

// Import Constants.
import { muiTheme } from '@/styles/createMuiTheme';

const AppLayout = ({ children }) => {
  return (
    <MuiThemeProvider theme={muiTheme}>
      <EmotionThemeProvider theme={THEME}>{children}</EmotionThemeProvider>
    </MuiThemeProvider>
  );
};

export default AppLayout;
