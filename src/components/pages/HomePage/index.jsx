// Import Hero.
import Hero from './sections/Hero';

// Import Counters.
import Counters from './sections/Counters';

// Import About.
import About from './sections/About';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Counters />
      <About />
      <div style={{ height: '200vh', display: 'flex', alignItems: 'center' }}>
        HomePage
      </div>
    </>
  );
};

export default HomePage;
