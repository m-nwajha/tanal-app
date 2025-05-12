// Import MUI Components.
import { Grid } from '@mui/material';

// Import Components.
import CounterItemIcon from './CounterItemIcon';
import CounterItemText from './CounterItemText';

const CounterItem = ({ icon, getData }) => {
  return (
    <Grid
      justifyContent={{ xs: 'center' }}
      spacing={4}
      container>
      <Grid
        item
        display='flex'
        justifyContent='center'
        size={{ xs: 12, md: 6 }}>
        <CounterItemIcon
          icon={icon}
        />
      </Grid>
      <Grid
        item
        display='flex'
        justifyContent='center'
        size={{ xs: 12, md: 6 }}>
        <CounterItemText
          getData={getData}
        />
      </Grid>
    </Grid>
  );
};

export default CounterItem;
