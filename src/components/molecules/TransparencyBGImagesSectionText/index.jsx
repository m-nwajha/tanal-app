// Import MUI Components.
import { Typography } from '@mui/material';

// Import Style.
import { StyledText } from './style';

const TransparencyBGImagesSectionText = ({ textData }) => {
  return (
    <StyledText>
      <Typography variant='body1'>{textData}</Typography>
    </StyledText>
  );
};

export default TransparencyBGImagesSectionText;
