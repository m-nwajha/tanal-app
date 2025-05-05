// Import Emotion.
import Styled from '@emotion/styled';

export const StyledCounterItemIcon = Styled.div`
  border-radius: 15px 0 15px 0;
  transform: rotate(45deg);
  width: 100px;
  height: 100px;
  line-height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  &::after{
  content: '';
  background-color: ${({ theme }) => theme.colors.tertiary};
  width: 23px;
  height: 23px;
  border-radius: 5px;
  position: absolute;
  top: 20px;
  left: -10px;
  }
  & > svg{
  font-size: 5rem;
  transform: rotate(-45deg);
  }

// Styled by Props.
${({ theme }) => `
  border: 1px solid ${theme.colors.tertiary};

  &::after{
    background-color: ${theme.colors.tertiary};
  }

  & > svg{
    color: ${theme.colors.tertiary};
  }

    `}
`;
