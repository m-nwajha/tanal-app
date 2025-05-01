// Import Emotion.
import styled from '@emotion/styled';

export const HeaderStyled = styled.header`
  /* Header Styles **/
  padding-block: 0.8rem;
  background-color: transparent;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;

  // After Header.
  &:after {
    position: fixed;
    width: 500px;
    height: 300px;
    border-radius: 40px;
    -webkit-transform: rotate(-10deg);
    -ms-transform: rotate(-10deg);
    transform: rotate(-10deg);
    position: absolute;
    top: -170px;
    left: -140px;
    z-index: -1;
  }

  // Styled by Using Props.
  ${({ theme, headerFixed, openMobileMenu }) => {
    return `
    // After Header.
    &:after {
      content: ${headerFixed === 0 && '""'}; 
      background-color: ${theme.colors.secondary};
    }


    // Media Query.
    @media (${theme.media.tablet}) {
      &:after {
        width: 300px;
      }
    }


    // Header Fixed.
    ${
      headerFixed > 0 &&
      `
    padding-block: 0.4rem;
    background-color: #ffffff3d;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -2px rgba(0, 0, 0, 0.1);
    
    
    // Header Fixed & backdrop-filter.
    ${
      !openMobileMenu &&
      `
    -webkit-backdrop-filter: blur(20px);
    backdrop-filter: blur(20px);
    `
    }


    `
    }


    
      `;
  }}
`;
