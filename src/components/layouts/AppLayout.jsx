'use client';
import React from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { CookiesProvider } from 'react-cookie';
import { muiTheme } from '@/styles/createMuiTheme';
import { THEME } from '@/styles/theme';
import TopLoader from '../ui/TopLoader';

const AppLayout = ({ children }) => {
  return (
    <MuiThemeProvider theme={muiTheme}>
      <EmotionThemeProvider theme={THEME}>
        <CookiesProvider>
          <TopLoader />
          {children}
        </CookiesProvider>
      </EmotionThemeProvider>
    </MuiThemeProvider>
  );
};

export default AppLayout;
