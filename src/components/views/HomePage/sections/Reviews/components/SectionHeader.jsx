// Import MUI Components.
import { Stack } from '@mui/material';

// Import Components.
import H from '@/components/ui/HeadingSection';
import D from '@/components/ui/DescriptionSection';
import { REVIEWS } from '@/constants/REVIEWS';

const SectionHeader = () => {
  const {title , description} = REVIEWS
  return (
    <Stack
      spacing={4}
      mb={10}
      alignItems='center'>
      <H
        type='light'
        variant='h4'>
        {title}
      </H>
      <D
        variant='h6'
        type='light'>
        {description}
      </D>
    </Stack>
  );
};

export default SectionHeader;
