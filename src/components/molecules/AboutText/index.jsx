// Import MUI Components.
import { Stack, Typography } from '@mui/material';

// Import Hooks.
import { useTheme } from '@emotion/react';

// Import Components.
import H from '@/components/ui/HeadingSection';

const AboutText = ({ title, description }) => {
  const { colors, fontFamily } = useTheme();
  return (
    <Stack spacing={4}>
      <H
        type='dark'
        variant='h4'>
        {title}
      </H>
      <Typography
        lineHeight={2}
        variant='body1'
        fontFamily={fontFamily.IBM}
        color={colors.quinary}>
        {description}
      </Typography>
    </Stack>
  );
};

export default AboutText;
