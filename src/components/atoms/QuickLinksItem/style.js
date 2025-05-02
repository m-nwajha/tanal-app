// Import Emotion.
import styled from '@emotion/styled';

export const QuickLinksItemStyled = styled.li`
  ${({ theme }) => {
    const { quinary, tertiary } = theme.colors;
    return `
  & > a {
    color: ${quinary};
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
