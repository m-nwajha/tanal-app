'use client';
// Import ReactJS.
import { useEffect, useState } from 'react';

// Import MUI Components.
import { Stack, Typography } from '@mui/material';

const CounterItemText = ({ getData }) => {
  let amount = getData?.amount;
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    for (let i = 0; i <= amount; i++) {
      setTimeout(() => {
        setCounter(i);
      }, 1000);
    }
  }, []);
  return (
    <Stack
      textAlign={{ xs: 'center' }}
      spacing={2}>
      <Typography
        variant='h5'
        fontWeight={{ xs: '600' }}
        color='primary'
        component='h5'>
        {counter}
      </Typography>
      <Typography
        sx={{ color: 'black', fontWeight: '600' }}
        variant='h6'>
        {getData.label}
      </Typography>
    </Stack>
  );
};

export default CounterItemText;
