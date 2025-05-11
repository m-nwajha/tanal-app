'use client';
// Import MUI Components.
import { Skeleton, Stack } from '@mui/material';

// Import Components.
import FooterHeading from '../FooterHeading';
import SocialMediaItem from '../SocialMediaItem';

// Import Constants.
import { SOCIAL_MEDIA_ICON } from '@/constants/SOCIAL_MEDIA_ICON';

// Import Style.
import { SocialMediaStyled } from './style';

const SocialMedia = ({ getData, title, iconTitle, loading }) => {
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
              sx={{ width: '40px', height: '60px', borderRadius:'10px' }}
              variant='text'
            />
            <Skeleton
              sx={{ width: '40px', height: '60px', borderRadius:'10px' }}
              variant='text'
            />
            <Skeleton
              sx={{ width: '40px', height: '60px', borderRadius:'10px' }}
              variant='text'
            />
            <Skeleton
              sx={{ width: '40px', height: '60px', borderRadius:'10px' }}
              variant='text'
            />
          </>
        ) : (
          getData?.map(soItem => {
            const { icon, URL } = SOCIAL_MEDIA_ICON[soItem.label];
            return (
              <SocialMediaItem
                key={soItem.id}
                title={soItem.label}
                href={`${URL}${soItem.useName}`}
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
