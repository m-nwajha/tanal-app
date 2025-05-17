'use client';
// Import React.
import { useEffect } from 'react';

// Import Hooks.
import useAPI from '@/hooks/useAPI';

// Import Config.
import { API_KEY } from '@/config/API';

// Import Constants
import { END_POINTS } from '@/constants/END_POINTS';
import { HOME } from '@/constants/HOME';

// Import Sections.
import Hero from './sections/Hero';
import Counters from './sections/Counters';
import BetweenLines from './sections/BetweenLines';
import OurServices from './sections/OurServices';
<<<<<<< HEAD
import OurProjects from './sections/OurProjects';
import Reviews from './sections/Reviews';
import BoardDirectors from './sections/BoardDirectors';
import ContactSection from '@/components/sections/ContactSection';
=======

>>>>>>> 461fbe05ca982e46f1a4b1041765e200c9d02374
const HomePage = () => {
  // Use API.
  const { data, get, loading } = useAPI(END_POINTS.HOME, {
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
    <>
      <Hero
        getDataConstant={HOME}
        loading={loading}
      />
      <Counters
        getDataConstant={HOME}
        getDataAPI={data}
        loading={loading}
      />
      <BetweenLines getDataConstant={HOME} />
      <OurServices />
<<<<<<< HEAD
      <OurProjects />
      <Reviews />
      <BoardDirectors />
      <ContactSection />
=======

      <div style={{ height: '200vh', display: 'flex', alignItems: 'center' }}>
        HomePage
      </div>
>>>>>>> 461fbe05ca982e46f1a4b1041765e200c9d02374
    </>
  );
};

export default HomePage;
