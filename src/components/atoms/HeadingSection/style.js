// Import MUI Components.
import { Typography } from '@mui/material';

// Import Emotion.
import styled from '@emotion/styled';

export const HeadingSectionStyled = styled(Typography)`
  & > .light_heading__section {
    position: relative;
    margin-bottom: 3rem;
    z-index: 2;
  }
  & > .light_heading__section::after {
    content: '';
    position: absolute;
    width: 90%;
    height: 30px;
    bottom: -8px;
    right: -10px;
    z-index: -1;
    background-image: url(/assets/images/underline.png);
    background-size: contain;
    background-repeat: no-repeat;
  }
`;