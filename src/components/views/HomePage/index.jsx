'use client';
// Import Constants
import { HOME } from '@/constants/HOME';

// Import Sections.
import Hero from './sections/Hero';
import Counters from './sections/Counters';
import BetweenLines from './sections/BetweenLines';
import OurServices from './sections/OurServices';
import OurProjects from './sections/OurProjects';
import Reviews from './sections/Reviews';
import BoardDirectors from './sections/BoardDirectors';
import ContactSection from '@/components/sections/ContactSection';
const HomePage = () => {
  return (
    <>
      <Hero
        getDataConstant={HOME}
      />
      <Counters
        getDataConstant={HOME}
      />
      <BetweenLines getDataConstant={HOME} />
      <OurServices />
      <OurProjects />
      <Reviews />
      <BoardDirectors />
      <ContactSection />
    </>
  );
};

export default HomePage;
