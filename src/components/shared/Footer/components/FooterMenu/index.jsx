// Import MUI Components.
import { Box, Skeleton, Stack } from '@mui/material';

// Import Components.
import FooterMenuItem from '../FooterMenuItem';
import FooterHeading from '../FooterHeading';

// Import Style.
import { FooterMenuStyled } from './style';
import { skeletonArr } from '@/utils/skeletonArr';

const FooterMenu = ({ getData, title, iconTitle, loading }) => {
  return (
    <Stack spacing={3}>
      <FooterHeading icon={iconTitle}>{title}</FooterHeading>
      <FooterMenuStyled>
        {loading || getData.length === 0 ? (
          <Stack spacing={2} sx={{ width: '100%' }}>
            {skeletonArr(4).map((_, index) => (
              <Skeleton
                key={index}
                sx={{ width: '60%', fontSize: '1.2rem' }}
                variant='text'
              />
            ))}
          </Stack>
        ) : (
          getData.map(LinkItem => {
            return (
              <FooterMenuItem
                key={LinkItem._id || LinkItem.id}
                LinkItem={LinkItem}
              />
            );
          })
        )}
      </FooterMenuStyled>
    </Stack>
  );
};

export default FooterMenu;
