// Import Emotion.
import styled from '@emotion/styled';

import bg from '@images/bg-pattern.png';

export const WrapperAboutStyled = styled.div`
  padding-block: 5rem;
  background: url(${bg.src}) repeat ${props => props.theme.colors.primary};
  background-size: 5%;
  position: relative;
`;
