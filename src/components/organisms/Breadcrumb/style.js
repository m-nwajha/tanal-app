// Import MUI.
import { Chip } from '@mui/material';

// Import Emotion.
import styled from '@emotion/styled';


// Wrapper Styled.
export const BreadcrumbWrapperStyled = styled.div`
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

// Breadcrumb Item Styled.
export const StyledBreadcrumb = styled(Chip)`
  padding: 0.2rem 0.6rem;
  box-shadow: 0 0.125rem 0.125rem -0.125rem rgba(31, 27, 45, 0.08),
    0 0.25rem 0.75rem rgba(31, 27, 45, 0.08);
  &,
  &:active,
  &:hover,
  &:focus {
    background-color: #c3c9d7;
  }
  
  // Styled by Props.
  ${
    ({theme})=>{
      return `
      background-color: ${theme.colors.quaternary};
      &,
      & svg {
        color: ${theme.colors.primary} !important;
      }
      `
    }
  }
`;