// Import MUI Component.
import { IconButton } from '@mui/material';

// Import Emotion.
import styled from '@emotion/styled';

export const SocialMediaItemStyled = styled(IconButton)`
  // Social Media Icon Styles.
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid;
  transition: 0.7s;
  height: 30px;
  width: 30px;
  font-size: 0.7rem;
  border-radius: 11px;
  cursor: pointer;
  box-shadow: 0 0.125rem 0.125rem -0.125rem rgba(31, 27, 45, 0.08),
    0 0.25rem 0.75rem rgba(31, 27, 45, 0.08);
  & :hover {
    background-color: transparent;
  }

  // Styles by Props.
  ${({ theme }) => {
    const { primary, quinary } = theme.colors;
    return `
      color: ${primary};
      background-color: ${quinary};
      border-color: ${quinary};
      & :hover {
        color: ${quinary};
      }
    `;
  }}
`;
