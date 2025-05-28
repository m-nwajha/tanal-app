// Import MUI Components.
import { Stack } from '@mui/material';

// Import Components.
import H from '@/components/ui/HeadingSection';
import D from '@/components/ui/DescriptionSection';
import bg from '@images/arrow.png';

const SectionHeader = ({ title, description }) => {
  return (
    <Stack
      spacing={4}
      mb={13}
      alignItems='center'
      sx={{
        'position': 'relative',
        '&:after': {
          content: '""',
          right: '0',
          bottom: '-110px',
          height: '120px',
          width: '320px',
          position: 'absolute',
          backgroundImage: `url(${bg.src})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right top',
          zIndex: '-1',
        },
      }}>
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
