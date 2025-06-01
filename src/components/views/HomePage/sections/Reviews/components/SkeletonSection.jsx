import { skeletonArr } from '@/utils/skeletonArr';
import { Grid, Skeleton } from '@mui/material';

const SkeletonSection = () => {
  return (
    <Grid
      container
      justifyContent='center'
      alignItems='center'
      spacing={3}>
      {skeletonArr(3).map((_, index) => (
        <Grid
          key={index}
          item
          size={{ sm: 10, md: 4 }}
          alignSelf='center'>
          <Skeleton
            variant='rounded'
            sx={{ borderRadius: '3px' }}
            width='100%'
            height='300px'
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default SkeletonSection;
