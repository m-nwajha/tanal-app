import styled from '@emotion/styled';

export const AboutImgStyled = styled.div`
  box-shadow: 0 0 18px 0 rgba(0, 0, 0, 0.17);
  position: absolute;
  transform: rotate(45deg);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  & > img {
    position: relative !important;
    transform: translateX(-20%) rotate(-45deg) scale(1.3);
    height: 148% !important;
    width: auto !important;
  }

  // Styled by Props.
  ${({ theme, widthBox, heightBox, top, right, left, bottom }) => `
    border-radius: ${heightBox / 4}px 0 ${heightBox / 4}px 0;
    height: ${heightBox}px;
    width: ${widthBox}px;
    border: 15px solid ${theme.colors.tertiary};
    background-color: ${theme.colors.tertiary};
    bottom: ${bottom}px;
    top: ${top}px;
    right: ${right}px;
    left: ${left}px;
  `}
`;
