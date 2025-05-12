// Import Emotion.
import styled from '@emotion/styled';

export const StyledWrapperHero = styled.div`
  padding-block: 13rem 7rem;
  position: relative;
  display: flex;
  align-items: center;
  &::after {
    content: '';
    position: absolute;
    border-radius: 0 0 100px 0;
    position: absolute;
    inset: 0 40px 0 0;
    z-index: -1;
  }

  // Style by Props.
  ${({ theme }) => {
    return `
    &::after {
      background-color: ${theme.colors.quinary};
    }
    
    // Media Query.
    @media (${theme.media.tablet}) {
      &:after {
        border-radius: 0 0 50px 0;
        inset: 0 10px 0 0;
      }
    }
    `;
  }}
`;
