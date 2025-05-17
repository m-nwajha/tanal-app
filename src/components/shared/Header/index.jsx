'use client';

import { useState } from 'react';
import { Box, Container, Grid, useTheme } from '@mui/material';
import useScroll from '@/hooks/useScroll';
import Logo from '@/components/ui/Logo';
import Navbar from './components/Navbar';
import NavBtn from './components/NavBtn';

const Header = () => {
  const [menu, setMenu] = useState(false);
  const { heightScroll } = useScroll();
  const theme = useTheme();

  const isFixed = heightScroll > 0;

  return (
    <Box
      component='header'
      sx={{
        'paddingBlock': isFixed ? '0.4rem' : '0.8rem',
        'backgroundColor': isFixed ? '#ffffff3d' : 'transparent',
        'boxShadow': isFixed
          ? '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)'
          : 'none',
        'backdropFilter': isFixed && !menu ? 'blur(20px)' : 'none',
        'WebkitBackdropFilter': isFixed && !menu ? 'blur(20px)' : 'none',
        'position': 'fixed',
        'top': 0,
        'left': 0,
        'right': 0,
        'zIndex': 1000,
        '&::after': {
          content: heightScroll === 0 ? '""' : 'none',
          backgroundColor: theme.palette.secondary.main,
          width: { xs: '300px', sm: '500px' },
          height: '300px',
          borderRadius: '40px',
          transform: 'rotate(-10deg)',
          position: 'absolute',
          top: '-170px',
          left: '-140px',
          zIndex: -1,
        },
      }}>
      <Container maxWidth='lg'>
        <Grid
          container
          spacing={2}
          justifyContent='space-between'
          alignItems='center'>
          <Grid
            item
            sx={{ order: 1 }}>
            <Logo
              variant='dark'
              height={isFixed ? 90 : 100}
            />
          </Grid>

          <Grid
            item
            sx={{ order: { xs: 3, lg: 2 } }}>
            <Navbar
              navFixed={heightScroll}
              toggleMenuMobile={() => setMenu(!menu)}
              menuState={menu}
            />
          </Grid>

          <Grid
            item
            sx={{
              order: { xs: 2, lg: 3 },
              display: { xs: 'none', lg: 'flex' },
            }}>
            <NavBtn navFixed={heightScroll} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Header;
