// Import Emotion.
import styled from '@emotion/styled';

export const TitleStyled = styled.div`
  &,
  .title_boxes {
    position: relative;
  }
  &:after {
    content: '';
    position: absolute;
    transform: rotate(-45deg);
    width: 300px;
    height: 350px;
    border-radius: 24px;
    z-index: -20;
    top: 10%;
    left: 10%;
  }

  .title_boxes::after {
    position: absolute;
    transform: rotate(-45deg);
    content: '';
    width: 210px;
    height: 210px;
    border-radius: 0 24px 0 24px;
    position: absolute;
    box-shadow: 0 0 18px 0 rgba(0, 0, 0, 0.17);
    top: 0;
    left: 0;
  }

  & h5 {
    width: 120px;
    position: relative;
    text-transform: capitalize;
    line-height: 62px;
    height: 160px;
    padding-top: 40px;
    margin-top: 80px;
    padding-left: 20px;
    margin-left: 24px;
    z-index: 11;
  }

  & img {
    position: relative !important;
    height: 148% !important;
    object-fit: cover;
  }

  .piece_big {
    position: absolute;
    width: 210px;
    height: 210px;
    top: 0;
    right: -100px;
    overflow: hidden;
    transform: rotate(-45deg);
    box-shadow: 0 0 18px 0 rgba(0, 0, 0, 0.17);
    border-radius: 0 32px 0 23px;
  }

  .piece_top {
    position: absolute;
    width: 210px;
    height: 50px;
    top: -23px;
    right: 55px;
    overflow: hidden;
    transform: rotate(-45deg);
    box-shadow: 0 0 18px 0 rgba(0, 0, 0, 0.17);
    border-radius: 0 15px 0 15px;
  }

  // Styled by Props.
  ${({ theme }) => `
    &:after {
    background-color: ${theme.colors.quinary};
    }
    .title_boxes::after {
    background-color: ${theme.colors.secondary};
    }
    & h5 {
    color: ${theme.colors.quinary};
    }
  `}
`;
