import { Grid, Skeleton, Box } from '@mui/material';

const SkeletonSection = () => {
  const skeletonArray = Array.from({ length: 4 });

  return (
    <Grid
      container
      justifyContent='center'
      alignItems='center'
      spacing={3}>
      {skeletonArray.map((_, index) => (
        <Grid
          key={index}
          item
          size={{ sm: 10, md: 3 }}
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
