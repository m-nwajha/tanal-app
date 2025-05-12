// Import MUI Components.
import { Grid } from '@mui/material';

// Import Components.
import MoreBtnHero from './MoreBtnHero';

const HeroBtns = ({ getData, loading }) => {
  return (
    <Grid
      container
      justifyContent='center'
      spacing={3}>
      <MoreBtnHero
        moreBtn={getData}
        loading={loading}
      />
    </Grid>
  );
};

export default HeroBtns;
