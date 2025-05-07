// Import MUI Components.
import { Typography } from '@mui/material';

// Import Emotion.
import styled from '@emotion/styled';

export const HeadingSectionStyled = styled(Typography)`
  & > span {
    position: relative;
    margin-bottom: 3rem;
    z-index: 2;
  }
  & > span::after {
    content: '';
    position: absolute;
    width: 90%;
    height: 30px;
    bottom: -8px;
    right: -10px;
    z-index: -1;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(/assets/images/underline.png);
  }
`;