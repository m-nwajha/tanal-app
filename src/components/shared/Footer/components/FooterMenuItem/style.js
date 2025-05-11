// Import Emotion.
import styled from '@emotion/styled';

export const FooterMenuItemStyled = styled.li`
  ${({ theme }) => {
    const { quinary, tertiary } = theme.colors;
    return `
  & > a {
    font-family: ${theme.fontFamily.IBM};
    color: ${quinary};
    font-weight: 400;
    transition: 0.5s;
    padding-right: 0;
  }
  & > a:hover {
    color: ${tertiary};
    margin-right: 0.3rem;
  }
  `;
  }}
`;
