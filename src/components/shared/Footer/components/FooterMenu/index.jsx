// Import MUI Components.
import { Box, Skeleton, Stack } from '@mui/material';

// Import Components.
import FooterMenuItem from '../FooterMenuItem';
import FooterHeading from '../FooterHeading';

// Import Style.
import { FooterMenuStyled } from './style';

const FooterMenu = ({ getData, title, iconTitle, loading }) => {
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
      <FooterMenuStyled>
        {loading ? (
          <Box sx={{ width: '100%' }}>
            <Skeleton
              sx={{ width: '60%', fontSize: '1.2rem' }}
              variant='text'
            />
            <Skeleton
              sx={{ width: '60%', fontSize: '1.2rem' }}
              variant='text'
            />
            <Skeleton
              sx={{ width: '60%', fontSize: '1.2rem' }}
              variant='text'
            />
          </Box>
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
