// Import Emotion.
import styled from '@emotion/styled';

export const StyledText = styled.div`
  position: relative;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 1.5rem;
  border-radius: 20px 0 20px 0;
  border: 1px solid;

  // Style P.
  & p {
    line-height: 2rem;
  }

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

  // style By Props.
  ${({ theme }) => {
    const { tertiary, primary } = theme.colors;
    return `
    border-color: ${tertiary};
      & p{
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
