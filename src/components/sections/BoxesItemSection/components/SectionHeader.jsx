// Import MUI Components.
import { Stack } from '@mui/material';

// Import Components.
import H from '@/components/ui/HeadingSection';
import D from '@/components/ui/DescriptionSection';

const SectionHeader = ({ title, description }) => {
  return (
    <Stack
      spacing={4}
      mb={7}
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
