// Import NextJs.
import Image from 'next/image';

// Import Emotion.
import styled from '@emotion/styled';

export const StyledHeroImg = styled(Image)`
  max-width: 100%;
  height: auto;
  object-fit: cover;
  object-position: center;
  border-radius: 50px 0 50px 0;
  @media (${({ theme }) => theme.media.tablet}) {
    border-radius: 30px 0 30px 0;
  }
`;
