'use client';
import Breadcrumb from '@/components/sections/Breadcrumb';
import { API_KEY } from '@/config/API';
import { ABOUT_BREADCRUMB } from '@/constants/ABOUT';
import { END_POINTS } from '@/constants/END_POINTS';
import { PROJECTS } from '@/constants/PROJECTS';
import useAPI from '@/hooks/useAPI';
import { useEffect } from 'react';
import BetweenLines from './sections/BetweenLines';
import GoalsProject from './sections/Goals';
import Services from './sections/OurServices';

const OurProjectItem = ({ getParams }) => {
  // Use API.
  const { data, get, loading } = useAPI(
    `${END_POINTS.PROJECTS}?title=${getParams}`,
    API_KEY
  );
  // useEffect.
  useEffect(() => {
    get();
  }, []);
  return (
    <>
      <Breadcrumb
        title={getParams}
        description={ABOUT_BREADCRUMB.description}
        breadcrumbHistory={PROJECTS.breadcrumbHistory(getParams)}
      />
      <BetweenLines loading={loading} />
      <GoalsProject />
      <Services />
    </>
  );
};

export default OurProjectItem;
