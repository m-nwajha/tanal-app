'use client';
// Import React Hooks.
import { useEffect } from 'react';

// Import MUI Components.
import { Box, Container, Grid, Stack } from '@mui/material';

// Import Components.
import HeroText from '@/components/molecules/HeroText';
import HeroBtns from '@/components/molecules/HeroBtns';
import HeroImages from '@/components/molecules/HeroImages';

// Import Hooks.
import useAPI from '@/hooks/useAPI';

// Import Constants.
import { END_POINTS } from '@/constants/END_POINTS';

// Import Style
import { StyledWrapperHero } from './style';

const Hero = () => {
  // Use API.
  const { data, get, loading } = useAPI(END_POINTS.HOME);
  // useEffect.
  useEffect(() => {
    get();
  }, []);
  return (
    <StyledWrapperHero id='hero'>
      <Container maxWidth='lg'>
        <Grid
        justifyContent='space-around'
          container
          spacing={8}>
          <Grid
            size={{ xs: 12, md: 4 }}
            alignSelf={{ xs: 'center' }}>
            <Stack spacing={5}>
              <HeroText
                getData={data}
                loading={loading}
              />
              <HeroBtns
                getData={data}
                loading={loading}
              />
            </Stack>
          </Grid>
          <Grid
            container
            size={{ xs: 10, md: 6 }}
            justifyContent='center'>
            <HeroImages
              getData={data}
              loading={loading}
            />
          </Grid>
        </Grid>
      </Container>
    </StyledWrapperHero>
  );
};

export default Hero;
