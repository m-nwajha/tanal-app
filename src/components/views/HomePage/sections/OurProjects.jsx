'use client';
import { useEffect } from 'react';
import RoundedBGBlue from '@/components/sections/RoundedBGBlue';
import { API_KEY } from '@/config/API';
import { END_POINTS } from '@/constants/END_POINTS';
import { PROJECTS } from '@/constants/PROJECTS';
import useAPI from '@/hooks/useAPI';

const OurProjects = () => {
    // Use API.
    const { data, get, loading } = useAPI(END_POINTS.PROJECTS, API_KEY);
    // useEffect.
    useEffect(() => {
      get();
    }, []);
  return (
    <RoundedBGBlue
      title={PROJECTS.title}
      description={PROJECTS.description}
      items={data.slice(-4)}
      loading={loading}
    />
  );
};

export default OurProjects;
