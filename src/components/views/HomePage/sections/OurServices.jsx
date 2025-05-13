'use client';
// Import React.
import { useEffect } from 'react';

// Import Components.
import BoxesItemSection from '@/components/sections/BoxesItemSection';

// Import constants.
import { OUR_SERVICES } from '@/constants/OUR SERVICES';
import { END_POINTS } from '@/constants/END_POINTS';
import { PATHS } from '@/constants/PATHS';

// Import Hooks.
import useAPI from '@/hooks/useAPI';

// Import Config.
import { API_KEY } from '@/config/API';

const OurServices = () => {
  // Use API.
  const { data, get, loading } = useAPI(END_POINTS.OUR_SERVICES, {
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
    <BoxesItemSection
      title={OUR_SERVICES.title}
      description={OUR_SERVICES.description}
      cardItems={data?.OUR_SERVICES}
      SkeletonItem={OUR_SERVICES.skeletonHome}
      moreHref={PATHS.SERVICES}
      loading={loading}
    />
  );
};

export default OurServices;
