// Import Emotion.
import styled from '@emotion/styled';

export const StyledDropdownNavItem = styled.li`
  ${({ theme }) => {
    // Destructure Theme Color.
    const { secondary, quinary, tertiary } = theme.colors;
    return `
    min-width: 200px;
    padding: 0.5rem 1.5rem;
    border-bottom: 1px solid ${secondary};
  
    & > a {
      color: ${quinary};
      font-size: 1rem;
      transition: 0.5s;
    }
  
    & > a:hover {
      color: ${tertiary};
      margin-right: 0.3rem;
    }
    
    `;
  }}
`;
