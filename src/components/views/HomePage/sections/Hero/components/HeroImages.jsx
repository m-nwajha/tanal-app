// Import MUI Components.
import { Grid } from '@mui/material';

// Import Components.
import HeroImgItem from './HeroImgItem';

const HeroImages = ({ getData, loading }) => {
  return (
      <Grid
        container
        justifyContent='center'
        alignItems='center'
        spacing={2}>
        <Grid
          item
          size={6}>
          <HeroImgItem
            loading={loading}
            alt='hero-img'
            src={getData?.HERO?.images?.img1}
          />
        </Grid>
        <Grid
          item
          size={6}>
          <Grid
            container
            flexDirection='column'
            spacing={2}>
            <Grid
              alignSelf='center'
              item
              size={12}>
              <HeroImgItem
                loading={loading}
                alt='hero-img'
                src={getData?.HERO?.images?.img2}
              />
            </Grid>
            <Grid
              alignSelf='center'
              item
              size={12}>
              <HeroImgItem
                loading={loading}
                alt='hero-img'
                src={getData?.HERO?.images?.img3}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
  );
};

export default HeroImages;
