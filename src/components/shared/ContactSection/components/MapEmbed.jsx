'use client';

import { API_KEY } from '@/config/API';
import { END_POINTS } from '@/constants/END_POINTS';
import useAPI from '@/hooks/useAPI';
import { Box, Skeleton } from '@mui/material';
import { useEffect } from 'react';

const MapEmbed = () => {
  const { data, get, loading } = useAPI(END_POINTS.CONTACT_INFO, API_KEY);

  useEffect(() => {
    get();
  }, []);

  return (
    <Box
      component='div'
      sx={{
        height: 340,
        width: '100%',
        mb: { xs: 4, lg: 0 },
      }}>
      {loading || !data[0]?.location ? (
        <Skeleton
          variant='rectangular'
          width='100%'
          height='100%'
          sx={{ borderRadius: '20px' }}
        />
      ) : (
        <iframe
          src={data[0]?.location}
          allowFullScreen
          loading='lazy'
          style={{
            border: 0,
            width: '100%',
            height: '100%',
            borderRadius: '20px',
          }}
          title='Google Map'
        />
      )}
    </Box>
  );
};

export default MapEmbed;
