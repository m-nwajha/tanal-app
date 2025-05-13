// Import MUI Components.
import { Typography } from '@mui/material';

// Import Emotion.
import styled from '@emotion/styled';

export const DescriptionSectionStyled = styled(Typography)`
  font-family: ${({ theme }) => theme.fontFamily.IBM};
  font-weight: 500;
`;
