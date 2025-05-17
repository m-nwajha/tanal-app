// Import Emotion.
import styled from '@emotion/styled';
import { Card } from '@mui/material';

export const StyledReviewItem = styled(Card)`
  position: relative;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 1.5rem;
  border-radius: 20px 0 20px 0;
  overflow: initial;
  border: 1px solid;
  // before style.
  &:before {
    content: '';
    position: absolute;
    right: 10px;
    top: -3px;
    height: 6px;
    width: 4rem;
    border-radius: 50px;
    transition: 0.7s;
  }

  // after style.
  &:after {
    content: '';
    position: absolute;
    left: 10px;
    bottom: -3px;
    height: 6px;
    width: 1rem;
    border-radius: 50px;
    transition: 0.7s;
  }

  & .icon {
    border-radius: 20px;
    transform: rotate(45deg);
    width: 70px;
    height: 70px;
    top: -30px;
    position: absolute;
    text-align: center;
    left: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & .icon svg {
    width: 50px;
    height: 50px;
    transform: rotate(-45deg);
  }

  // style By Props.
  ${({ theme }) => {
    const { tertiary, primary } = theme.colors;
    return `
    border-color: ${tertiary};
    & .icon {
      background-color: ${tertiary};
    }
    & .icon svg {
      color: ${primary};
  }

      &:after {
        background-color: ${tertiary};
      }
      &:before {
        background-color: ${tertiary};
      }
    `;
  }}
`;
