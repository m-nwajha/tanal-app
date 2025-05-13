// Import MUI Components.
import { Card } from '@mui/material';

// Import Emotion.
import styled from '@emotion/styled';

export const CardItemStyled = styled(Card)`
  // Card style
  height: 250px;
  border-radius: 16px;
  position: relative;
  z-index:1;
  overflow: hidden;
  cursor: pointer;

  // Box text style.
  & > .box_text {
    position: absolute;
    inset-inline: 0;
    border-radius: 24px 24px 0 0;
    padding: 20px;
    gap: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    bottom: 0;
    height: 30%;
    backdrop-filter: saturate(100%) blur(10px);
    background: rgba(0, 0, 0, 0.32);
    transition: all 0.3s cubic-bezier(0, 0.81, 1, 0.97);
  }
  &:hover > .box_text {
    height: 70%;
  }

  // Title style.
  & > .box_text .card_title span {
    position: relative;
    font-weight: 600;
  }
  & > .box_text .card_title span::after {
    content: '';
    height: 3px;
    width: 0%;
    position: absolute;
    inset-inline: 0;
    bottom: -4px;
    z-index: 0;
    transition: all 0.2s cubic-bezier(0.42, 0.16, 0.21, 0.93);
    transition-delay: 0.3s;
  }

  &:hover > .box_text .card_title span::after {
    width: 100%;
  }

  // Paragraph style.
  & > .box_text .card_p {
    display: none;
    font-family: ${({ theme }) => theme.fontFamily.IBM};
  }
  &:hover > .box_text .card_p {
    display: block;
  }
  // Styled by Props:
  ${({ theme }) => {
    const { tertiary, quinary } = theme.colors;
    return `
    & > .box_text {
      color: ${quinary};
    }
    & > .box_text .card_title span::after {
      background-color: ${tertiary};
    }
    & > .box_text .card_p {
      font-family: ${theme.fontFamily.IBM};
    }
    `;
  }}
`;


export const CardBottom = styled.span`
  &:before {
    content: '';
    position: absolute;
    height: 80px;
    left: 50%;
    transform: translate(-50%);
    width: 80%;
    z-index: -2;
    bottom: -25px;
    border-radius: 16px;
    border-width: 1px;
    border-style: solid;
    border-color: initial;
    border-image: initial;
    border-color: rgba(0, 0, 0, 0.12);
    background-color: rgb(255, 255, 255);
    box-shadow: rgba(0, 0, 0, 0.06) 0px 1.5px 12px 2px;
  }
  &:after {
    content: '';
    position: absolute;
    height: 80px;
    left: 50%;
    transform: translate(-50%);
    width: 90%;
    bottom: -15px;
    z-index: -2;
    border-radius: 16px;
    border-width: 1px;
    border-style: solid;
    border-color: initial;
    border-image: initial;
    border-color: rgba(0, 0, 0, 0.12);
    background-color: rgb(255, 255, 255);
    box-shadow: rgba(0, 0, 0, 0.06) 0px 1.5px 12px 2px;
  }
`;

