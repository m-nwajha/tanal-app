// Import MUI Components.
import { Typography, Skeleton, Stack } from '@mui/material';

// Import Style.
import { StyledText } from './style';

const TransparencyBGImagesSectionText = ({ textData, loading }) => {
  return (
    <StyledText>
      {loading ? (
        <Stack
          width='100%'
          spacing={1}>
          <Skeleton
            variant='text'
            width='100%'
            height='3rem'
          />
          <Skeleton
            variant='text'
            width='100%'
            height='3rem'
          />

          <Skeleton
            variant='text'
            width='100%'
            height='3rem'
          />

          <Skeleton
            variant='text'
            width='50%'
            height='3rem'
          />
        </Stack>
      ) : (
        <Typography variant='body1'>{textData}</Typography>
      )}
    </StyledText>
  );
};

export default TransparencyBGImagesSectionText;
