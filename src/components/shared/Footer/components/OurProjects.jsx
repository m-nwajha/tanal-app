// Import ReactJS.
import { useEffect } from 'react';

// Import Hooks.
import useAPI from '@/hooks/useAPI';

// Import Component.
import FooterMenu from './FooterMenu';

// Import Constants.
import { END_POINTS } from '@/constants/END_POINTS';
import { API_KEY } from '@/config/API';

const OurProjects = ({ titleOurProjects, iconOurProjects }) => {
  // Use API.
  const { data, loading, get } = useAPI(END_POINTS.PROJECTS, API_KEY);

  // Use Effect.
  useEffect(() => {
    get();
  }, []);

  return (
    <FooterMenu
      title={titleOurProjects}
      iconTitle={iconOurProjects}
      getData={data}
      loading={loading}
    />
  );
};

export default OurProjects;
