// Import Emotion.
import styled from '@emotion/styled';

export const StyledNav = styled.div`
  /* Nav Style **/
  nav > ul {
    margin: 0;
    padding: 0;
    display: flex;
    list-style: none;
    align-items: center;
    gap: 3rem;
  }
  @media (${({ theme }) => theme.media.tablet}) {
    .box_close {
      display: flex;
      justify-content: end;
      width: 90%;
    }

    nav {
      position: fixed;
      inset: 0;
      z-index: 99999;
      background-color: #111c3a7a;
      -webkit-backdrop-filter: blur(20px);
      backdrop-filter: blur(20px);
      display: none;
      gap: 2rem;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      & > ul {
        flex-direction: column;
        gap: 1rem;
        align-items: center;
        justify-content: center;
        background-color: ${({ theme }) => theme.colors.quinary};
        width: 80%;
        padding-block: 2rem;
        border-radius: 20px;
        overflow: scroll;
      }
      & > ul::-webkit-scrollbar {
        display: none;
      }
    }
    .menu_active {
      display: flex;
    }
  }
`;
