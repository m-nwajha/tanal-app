'use client';
import SectionIconList from '@/components/sections/SectionIconList';
import { API_KEY } from '@/config/API';
import { GOALS } from '@/constants/ABOUT';
import { END_POINTS } from '@/constants/END_POINTS';
import useAPI from '@/hooks/useAPI';
import { useEffect } from 'react';

const Goals = () => {
  // Use API.
  const { data, loading, get } = useAPI(END_POINTS.GOALS, API_KEY);

  // Use Effect.
  useEffect(() => {
    get();
  }, []);
  return (
    <SectionIconList
      loading={loading}
      getDataAPI={data}
      getDataConstant={GOALS}
    />
  );
};

export default Goals;
