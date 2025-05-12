// Import MUI Components.
import { Container, Grid, Stack } from '@mui/material';

// Import Components.
import HeroText from './components/HeroText';
import HeroBtns from './components/HeroBtns';
import HeroImages from './components/HeroImages';

// Import Style
import { StyledWrapperHero } from './style';

const Hero = ({ getDataConstant, loading }) => {
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
                getData={getDataConstant}
                loading={loading}
              />
              <HeroBtns
                getData={getDataConstant}
                loading={loading}
              />
            </Stack>
          </Grid>
          <Grid
            container
            size={{ xs: 11, md: 6 }}
            justifyContent='center'>
            <HeroImages
              getData={getDataConstant}
              loading={loading}
            />
          </Grid>
        </Grid>
      </Container>
    </StyledWrapperHero>
  );
};

export default Hero;
