// Import MUI Components.
import { Card } from '@mui/material';

// Import Emotion.
import styled from '@emotion/styled';

// Import BG.
import bg from '@images/all-serv.webp';


export const MoreCardStyled = styled(Card)`
  height: 250px;
  border-radius: 16px;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: #333761ed;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    z-index: -1;
    background: url(${bg.src});
    background-size: cover;
    background-position: center;
    filter: blur(4px);
  }
  & > .card_title {
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s cubic-bezier(0.42, 0.16, 0.21, 0.93);
    transition-delay: 0.3s;
    gap: 1rem;
    color: ${({ theme }) => theme.colors.quinary};
  }
  &:hover > .card_title {
    gap: 2rem;
  }

  & > .card_title span {
    position: relative;
    font-weight: 600;
  }
  & > .card_title span::after {
    content: '';
    height: 3px;
    width: 50%;
    position: absolute;
    background-color: ${({ theme }) => theme.colors.quinary};
    inset-inline: 0;
    bottom: -4px;
    z-index: 0;
    transition: all 0.2s cubic-bezier(0.42, 0.16, 0.21, 0.93);
    transition-delay: 0.3s;
  }

  &:hover > .card_title span::after {
    width: 90%;
  }
`; 