import styled from '@emotion/styled';

export const StyledSubMenu = styled.ul`
  position: absolute;
  list-style: none;
  background-color: ${({ theme }) => theme.colors.primary};
  top: calc(100% + 30px);
  z-index: 99;
  right: 0;
  margin: 0;
  padding: 10px 0;
  z-index: 99;
  opacity: 0;
  visibility: hidden;
  display: block;
  border-radius: 10px;
  box-shadow: 0 0.125rem 0.125rem -0.125rem rgba(31, 27, 45, 0.08),
    0 0.25rem 0.75rem rgba(31, 27, 45, 0.08);
  transition: 0.3s;
  @media (${({ theme }) => theme.media.tablet}) {
    right: -50%;
  }
`;
