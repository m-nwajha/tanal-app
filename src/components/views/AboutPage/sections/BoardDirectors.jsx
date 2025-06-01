'use client';
import TeamSection from '@/components/sections/TeamSection';
import { API_KEY } from '@/config/API';
import { END_POINTS } from '@/constants/END_POINTS';
import useAPI from '@/hooks/useAPI';
import React, { useEffect } from 'react';

const BoardDirectors = () => {
    // Use API.
    const { data, loading, get } = useAPI(END_POINTS.BOARD_DIRECTORS, API_KEY);
  
    // Use Effect.
    useEffect(() => {
      get();
    }, []);
  return (
    <TeamSection
      getDataAPI={data}
      loading={loading}
    />
  );
};

export default BoardDirectors;
