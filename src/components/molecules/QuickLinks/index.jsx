// Import MUI Components.
import { Box, Skeleton, Stack } from '@mui/material';

// Import Components.
import QuickLinksItem from '@/components/atoms/QuickLinksItem';
import FooterHeading from '@/components/atoms/FooterHeading';

// Import Style.
import { QuickLinksStyled } from './style';

const QuickLinks = ({ getData, title, iconTitle, loading }) => {
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
      <QuickLinksStyled>
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
              <QuickLinksItem
                key={LinkItem.id}
                LinkItem={LinkItem}
              />
            );
          })
        )}
      </QuickLinksStyled>
    </Stack>
  );
};

export default QuickLinks;
