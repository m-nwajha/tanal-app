'use client';
// Import React Hooks & Components.
import { useState, useEffect } from 'react';

// Import MUI Components.
import { Container, Grid } from '@mui/material';

// Import Hooks.
import useScroll from '@/hooks/useScroll';

// Import Components.
import Logo from '@/components/atoms/Logo';
import Navbar from '@/components/molecules/Navbar';
import NavBtn from '@/components/atoms/NavBtn';

// Import Style.
import { HeaderStyled } from './style';

const Header = () => {
  
  // Open | Close Menu On Mobile State.
  const [menu, setMenu] = useState(false);
  
  // Use Scroll
  const { heightScroll } = useScroll();

  return (
    // Header Render.
    <HeaderStyled
      headerFixed={heightScroll}
      openMobileMenu={menu}>
      {/** Container */}
      <Container maxWidth='lg'>
        {/** Row */}
        <Grid
          container
          spacing={2}
          justifyContent='space-between'
          alignItems='center'>
          {/** Logo Grid */}
          <Grid
            item
            sx={{ order: 1 }}>
            <Logo
              variant='dark'
              height={heightScroll > 0 ? 90 : 100}
            />
          </Grid>

          {/** Navbar Grid */}
          <Grid
            item
            sx={{ order: { xs: 3, lg: 2 } }}>
            <Navbar
              navFixed={heightScroll}
              toggleMenuMobile={() => setMenu(!menu)}
              menuState={menu}
            />
          </Grid>

          {/** NavBtns Grid */}
          <Grid
            item
            sx={{
              order: { xs: 2, lg: 3 },
              display: { xs: 'none', lg: 'flex' }
            }}>
            <NavBtn navFixed={heightScroll} />
          </Grid>
        </Grid>
      </Container>
    </HeaderStyled>
  );
};

export default Header;
