'use client';
// Import React.
import { useEffect } from 'react';

// Import Components.
import BoxesItemSection from '@/components/sections/BoxesItemSection';

// Import constants.
import { OUR_SERVICES } from '@/constants/OUR_SERVICES';
import { END_POINTS } from '@/constants/END_POINTS';
import { PATHS } from '@/constants/PATHS';

// Import Hooks.
import useAPI from '@/hooks/useAPI';

// Import Config.
import { API_KEY } from '@/config/API';

const Services = () => {
  // Use API.
  const { data, get, loading } = useAPI(END_POINTS.SERVICES, API_KEY);
  // useEffect.
  useEffect(() => {
    get();
  }, []);
  return (
    <BoxesItemSection
      title="خدمات المشروع"
      description={OUR_SERVICES.description}
      cardItems={data}
      SkeletonItem={OUR_SERVICES.skeletonHome}
      loading={loading}
    />
  );
};

export default Services;
