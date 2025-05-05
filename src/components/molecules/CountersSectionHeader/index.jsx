// Import MUI Components.
import { Stack } from '@mui/material';

// Import Components.
import H from '@/components/atoms/HeadingSection';
import D from '@/components/atoms/DescriptionSection';

const CountersSectionHeader = ({ getData }) => {
  return (
    <Stack
      spacing={4}
      alignItems='center'>
      <H
        type='light'
        variant='h4'>
        {getData?.title}
      </H>
      <D
        variant='h6'
        type='light'>
        {getData?.description}
      </D>
    </Stack>
  );
};

export default CountersSectionHeader;
