'use client';
import { Box, useTheme } from '@mui/material';
import React from 'react';
import Logo from './Logo';

const AppLoading = () => {
  const theme = useTheme();
  return (
    <Box
      component='div'
      sx={{
        position: 'fixed',
        inset: '0',
        backgroundColor: theme.palette.primary.main,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Logo
        variant='light'
        height={100}
        unLiked
      />
    </Box>
  );
};

export default AppLoading;
