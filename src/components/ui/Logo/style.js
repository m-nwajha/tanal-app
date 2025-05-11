// Import Next Components.
import Link from 'next/link';

// Import Emotion.
import styled from '@emotion/styled';

export const LogoStyled = styled(Link)`
  display: flex;
  align-items: center;
  & img {
    width: auto;
    object-fit: cover;
  }
`;
