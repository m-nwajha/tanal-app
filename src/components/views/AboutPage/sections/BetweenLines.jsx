'use client';
// Import React.
import { useEffect } from 'react';

// Import Components.
import BlueBGAndImgs from '@/components/sections/BlueBGAndImgs';

// Import Hooks.
import useAPI from '@/hooks/useAPI';

// Import Config.
import { API_KEY } from '@/config/API';

// Import Constants.
import { BETWEEN_LINES } from '@/constants/ABOUT';
import { END_POINTS } from '@/constants/END_POINTS';
import { Stack } from '@mui/material';

const BetweenLines = () => {
  // Use API.
  const { data, loading, get } = useAPI(END_POINTS.BETWEEN_LINES, API_KEY);

  // Use Effect.
  useEffect(() => {
    get();
  }, []);
  return (
    <Stack sx={{ pt: 10 }}>
      <BlueBGAndImgs
        type='light'
        title={BETWEEN_LINES.title2}
        description={data[0]?.description}
        imagesList={BETWEEN_LINES?.images}
        loading={loading}
      />
    </Stack>
  );
};

export default BetweenLines;
