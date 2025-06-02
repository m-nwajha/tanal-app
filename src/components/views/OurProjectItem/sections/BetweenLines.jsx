'use client';
// Import React.
import { useEffect } from 'react';

// Import Components.
import BlueBGAndImgs from '@/components/sections/BlueBGAndImgs';

// Import Hooks.
import useAPI from '@/hooks/useAPI';

// Import Config.
import { API_KEY } from '@/config/API';

// Import Constants.
import { ABOUT_BREADCRUMB, BETWEEN_LINES } from '@/constants/ABOUT';
import { END_POINTS } from '@/constants/END_POINTS';
import { Stack } from '@mui/material';
import { PROJECTS } from '@/constants/PROJECTS';
import { PATHS } from '@/constants/PATHS';

const BetweenLines = ({ getDataAPI, getDataConstant, loading }) => {
  return (
    <Stack sx={{ pt: 10 }}>
      <BlueBGAndImgs
        type='dark'
        title='التعريف بالمشروع'
        description='هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى'
        imagesList={PROJECTS.images}
        button={{
          label: 'طلب الاشتراك',
          href: PATHS.REQUEST
        }}
        loading={loading}
      />
    </Stack>
  );
};

export default BetweenLines;
