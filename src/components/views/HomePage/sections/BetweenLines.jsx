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

const BetweenLines = () => {
    // Use API.
    const { data, get, loading } = useAPI(END_POINTS.ABOUT_US, {
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': API_KEY
      }
    });
    // useEffect.
    useEffect(() => {
      get();
    }, []);
  return (
    <BlueBGAndImgs
      button={BETWEEN_LINES.button}
      title={BETWEEN_LINES.title}
      description={data?.betweenLines?.description}
      imagesList={BETWEEN_LINES?.images}
      loading={loading}
    />
  );
};

export default BetweenLines;
