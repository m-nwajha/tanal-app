// Import MUI Components
import { IconButton } from '@mui/material';

// Import Emotion.
import styled from '@emotion/styled';

export const ToTopBtnStyled = styled(IconButton)`
  &,
  &:hover {
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    border: 0;
    z-index: 999999;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.secondary};
    height: 34px;
    width: 34px;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.quinary};
    border-radius: 12px;
    transition: 0.7s;
    cursor: pointer;
    opacity: 0.4;
    box-shadow: 0 0.125rem 0.125rem -0.125rem rgba(31, 27, 45, 0.08),
      0 0.25rem 0.75rem rgba(31, 27, 45, 0.08);
  }
  &:hover {
    opacity: 0.9;
  }
`;
