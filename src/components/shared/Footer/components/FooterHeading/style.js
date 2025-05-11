// Import MUI Components.
import { Typography } from '@mui/material';

// Import Emotion.
import styled from '@emotion/styled';

export const FooterHeadingStyled = styled(Typography)`
  color: ${({ theme }) => theme.colors.quinary};
  font-size: 1.2rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  border-radius: 10px 0 10px 0;
  border: 1px solid #676ca399;
`;