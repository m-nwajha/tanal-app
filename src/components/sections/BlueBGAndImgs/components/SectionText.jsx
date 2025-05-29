// Import MUI Components.
import { Stack, Typography } from '@mui/material';

// Import Hooks.
import { useTheme } from '@emotion/react';

// Import Components.
import H from '@/components/ui/HeadingSection';

const SectionText = ({ title, description, type }) => {
  const { colors, fontFamily } = useTheme();
  return (
    <Stack spacing={4}>
      <H
        type={type === 'light' ? 'light' : 'dark'}
        variant='h4'>
        {title}
      </H>
      <Typography
        minHeight='9rem'
        lineHeight={2}
        variant='body1'
        fontFamily={fontFamily.IBM}
        color={type === 'light' ? colors.primary : colors.quinary}>
        {description}
      </Typography>
    </Stack>
  );
};

export default SectionText;
