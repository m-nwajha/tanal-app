// Import MUI Components.
import { Grid, Skeleton, Stack } from '@mui/material';

const CounterItemSkeleton = () => {
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
        <Skeleton
          variant='circular'
          sx={{
            height: '100px',
            width: '100px',
            borderRadius: '15px 0 15px 0',
            transform: 'rotate(45deg)'
          }}
        />
      </Grid>
      <Grid
        item
        display='flex'
        justifyContent='center'
        size={{ xs: 12, md: 6 }}>
        <Stack
          textAlign={{ xs: 'center' }}
          spacing={2}>
          <Skeleton
            variant='text'
            width='5rem'
            height='3rem'
          />
          <Skeleton
            variant='text'
            width='7rem'
            height='3rem'
          />
        </Stack>
      </Grid>
    </Grid>
  );
};

export default CounterItemSkeleton;
