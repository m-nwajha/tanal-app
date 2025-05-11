// Import Styled Component.
import styled from '@emotion/styled';

export const StyledNavItem = styled.li`
  /* Nav Item **/
  & > a,
  & > a:focus {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1.1rem;
    font-weight: 500;
    white-space: nowrap;
    border-radius: 10px;
    transition: 0.3s;
    position: relative;
  }

  & > a:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 8px;
    bottom: 10px;
    right: 0;
    visibility: hidden;
    width: 0px;
    z-index: -1;
    transition: all 0.3s ease-in-out 0s;
  }

  a:hover:before,
  &:hover > a:before,
  .active:before {
    visibility: visible;
    width: 60%;
  }

  a:hover,
  .active,
  .active:focus,
  &:hover > a {
    background-color: transparent;
  }
  
  // Style Using By Props.
  ${({ theme, isDropdown }) => {
    // Destructure Theme Color.
    const { primary, quaternary, tertiary } = theme.colors;
    
    return `
    
    & > a,
    & > a:focus {
      color: ${primary};
    }
  
  
    & > a:before {
      background-color: ${quaternary};
    }
  
  
    a:hover,
    .active,
    .active:focus,
    &:hover > a {
      color: ${tertiary};
    }


    // Dropdown on Hover Li.
        ${
          isDropdown &&
          `
        position: relative;
        &:hover>ul {
        opacity: 1;
        top: 2.8rem;
        visibility: visible;
        }
        `
        }


        `;
  }}
`;
