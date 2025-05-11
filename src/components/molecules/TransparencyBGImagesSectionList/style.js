// Import MUI Components
import { List, ListItemAvatar, ListItemText } from '@mui/material';

// Import Emotion.
import styled from '@emotion/styled';

export const StyledList = styled(List)`
  width: 100%;
  max-width: 24rem;
`;

export const StyledListItemAvatar = styled(ListItemAvatar)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 2px solid;
  height: 50px;
  width: 50px;
  min-width: 50px;

  &:hover {
    background-color: hsla(0, 2%, 35%, 0.1);
  }
  // Style By Props.
  ${({ theme }) => {
    const { tertiary } = theme.colors;
    return `
    border-color: ${tertiary};
    &>svg{
    color: ${tertiary};
    }
    `;
  }}
`;

export const StyledListItemText = styled(ListItemText)`
  & > span {
    color: ${({ theme }) => theme.colors.secondary};
  }
  &> p {
    font-size: 0.8rem;
  }
`;
