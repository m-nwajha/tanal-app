'use client';
// Import ReactJS.
import { useEffect, useState } from 'react';

// Import MUI Components.
import { Stack, Typography } from '@mui/material';

// Import Components.
import H from '../HeadingCard';

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
      <H
        variant='h6'
        type='light'>
        {getData.label}
      </H>
    </Stack>
  );
};

export default CounterItemText;
