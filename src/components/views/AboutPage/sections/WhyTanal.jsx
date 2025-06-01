'use client';
import SectionIconList from '@/components/sections/SectionIconList';
import { API_KEY } from '@/config/API';
import { WHY_TANAL } from '@/constants/ABOUT';
import { END_POINTS } from '@/constants/END_POINTS';
import useAPI from '@/hooks/useAPI';
import { useEffect } from 'react';

const WhyTanal = () => {
  // Use API.
  const { data, loading, get } = useAPI(END_POINTS.WHY_TANAL, API_KEY);

  // Use Effect.
  useEffect(() => {
    get();
  }, []);
  return (
    <SectionIconList
      loading={loading}
      getDataAPI={data}
      getDataConstant={WHY_TANAL}
    />
  );
};

export default WhyTanal;
