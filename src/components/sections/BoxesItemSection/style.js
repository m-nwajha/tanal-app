// Import Emotion.
import styled from '@emotion/styled';

// Import BG.
import bg from '@images/bg-pattern2.svg';

export const WrapperStyled = styled.div`
  padding-block: 7rem 5rem;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: -1;
    background-image: url(${bg.src});
    background-repeat: no-repeat;
    background-position: right top;
    background-size: 30%;
    opacity: 0.1;
  }
`;