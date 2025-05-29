'use client';
import BoxesItemSection from '@/components/sections/BoxesItemSection';
import Breadcrumb from '@/components/sections/Breadcrumb';
import { API_KEY } from '@/config/API';
import { END_POINTS } from '@/constants/END_POINTS';
import { OUR_SERVICES } from '@/constants/OUR_SERVICES';
import useAPI from '@/hooks/useAPI';
import { useEffect } from 'react';

const OurServicesPage = () => {
  // Use API.
  const { data, get, loading } = useAPI(END_POINTS.SERVICES, API_KEY);
  // useEffect.
  useEffect(() => {
    get();
  }, []);
  return (
    <>
      <Breadcrumb
        title={OUR_SERVICES.title}
        description={OUR_SERVICES.description}
        breadcrumbHistory={OUR_SERVICES.breadcrumbHistory}
      />
      <BoxesItemSection
        cardItems={data}
        SkeletonItem={OUR_SERVICES.skeletonHome}
        loading={loading}
      />
    </>
  );
};

export default OurServicesPage;
