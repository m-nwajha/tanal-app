'use client';

// Import MUI Components.
import { Stack, Typography } from '@mui/material';

const CounterItemText = ({ getData }) => {
  const maxLength = 50;
  return (
    <Stack
      textAlign={{ xs: 'center' }}
      spacing={2}>
      <Typography
        color='primary'
        variant='h6'>
        {getData?.title}
      </Typography>
      <Typography variant='body2'>
        {getData?.description.length > maxLength
          ? getData?.description.substring(0, maxLength) + '...'
          : getData?.description}
      </Typography>
    </Stack>
  );
};

export default CounterItemText;
