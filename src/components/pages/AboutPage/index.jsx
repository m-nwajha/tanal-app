'use client';
// Import React.
import { useEffect } from 'react';

// Import Hooks
import useAPI from '@/hooks/useAPI';

// Import Sections.
import AboutBreadcrumb from './sections/AboutBreadcrumb';
import BetweenLinesTanal from './sections/betweenLinesTanal';

// Import Constants.
import { END_POINTS } from '@/constants/END_POINTS';

const AboutPage = () => {
  // Use API.
  const { data, get, loading } = useAPI(END_POINTS.ABOUT_US);
  // useEffect.
  useEffect(() => {
    get();
  }, []);
  return (
    <>
      <AboutBreadcrumb
        getDataAPI={data}
        loading={loading}
      />
      <BetweenLinesTanal
        getDataAPI={data}
        loading={loading}
      />
      <div
        style={{
          height: '200vh',
          display: 'flex',
          alignItems: 'center'
        }}></div>
    </>
  );
};

export default AboutPage;
