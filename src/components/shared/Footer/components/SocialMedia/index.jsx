'use client';
import { useEffect } from 'react';
import useAPI from '@/hooks/useAPI';
// Import MUI Components.
import { Skeleton, Stack } from '@mui/material';

// Import Components.
import FooterHeading from '../FooterHeading';
import SocialMediaItem from '../SocialMediaItem';

// Import Constants.
import { SOCIAL_MEDIA_ICON } from '@/constants/SOCIAL_MEDIA_ICON';
import { END_POINTS } from '@/constants/END_POINTS';
import { API_KEY } from '@/config/API';

// Import Style.
import { SocialMediaStyled } from './style';

const SocialMedia = ({ getData, title, iconTitle }) => {
  // Use API.
  const { data, loading, get } = useAPI(END_POINTS.CONTACT_INFO, API_KEY);

  // Use Effect.
  useEffect(() => {
    get();
  }, []);
  return (
    <Stack spacing={3}>
      {loading ? (
        <Skeleton
          sx={{ width: '100%', height: '90px', fontSize: '1.2rem' }}
          variant='text'
        />
      ) : (
        <FooterHeading icon={iconTitle}>{title}</FooterHeading>
      )}
      <SocialMediaStyled>
        {loading ? (
          <>
            <Skeleton
              sx={{ width: '40px', height: '60px', borderRadius: '10px' }}
              variant='text'
            />
            <Skeleton
              sx={{ width: '40px', height: '60px', borderRadius: '10px' }}
              variant='text'
            />
            <Skeleton
              sx={{ width: '40px', height: '60px', borderRadius: '10px' }}
              variant='text'
            />
            <Skeleton
              sx={{ width: '40px', height: '60px', borderRadius: '10px' }}
              variant='text'
            />
          </>
        ) : (
          data[0]?.socialMedia?.map(soItem => {
            const { icon, URL } = SOCIAL_MEDIA_ICON[soItem.icon];
            return (
              <SocialMediaItem
                key={soItem._id}
                title={soItem.label}
                href={`${URL}${soItem.url}`}
                icon={icon}
              />
            );
          })
        )}
      </SocialMediaStyled>
      {/** add here google play Store and Apple Icons*/}
    </Stack>
  );
};

export default SocialMedia;
