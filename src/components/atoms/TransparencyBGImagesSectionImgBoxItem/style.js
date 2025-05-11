import styled from '@emotion/styled';

export const ImageStyled = styled.div`
  box-shadow: 0 0 18px 0 rgba(0, 0, 0, 0.17);
  position: absolute;
  z-index: -1;
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
    border: 15px solid ${theme.colors.quaternary};
    background-color: ${theme.colors.quaternary};
    bottom: ${bottom};
    top: ${top};
    right: ${right};
    left: ${left};
  `}
`;
