// Import MUI Components.
import { Stack, Skeleton } from '@mui/material';

// Import Components.
import H from '@/components/atoms/HeadingSection';
import D from '@/components/atoms/DescriptionSection';

const HeroText = ({ getData, loading }) => {
  return (
    <Stack spacing={3}>
      {loading ? (
        <Skeleton
          sx={{ width: '100%', height: '5rem' }}
          variant='text'
        />
      ) : (
        <H
          variant='h3'
          component='h1'
          type='light'>
          {getData?.hero?.title}
        </H>
      )}
      {loading ? (
        <Skeleton
          sx={{ width: '100%', height: '5rem' }}
          variant='text'
        />
      ) : (
        <D variant='h5' type='light'>{getData?.hero?.description}</D>
      )}
    </Stack>
  );
};

export default HeroText;
