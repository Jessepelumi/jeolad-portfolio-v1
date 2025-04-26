import styled from "styled-components";
import { media } from "./breakpoints";

export const StyledWorkExperience = styled.div`
  display: flex;
  width: 85%;

  aside {
    flex: 1;

    ul {
      list-style-type: none;
      padding: 0;
      cursor: default;

      li {
        transition: color 0.3s ease;
        border-left: 2px solid var(--gray);
        padding: 10px 20px;
        &:hover {
          color: var(--purple);
          background-color: var(--black);
        }

        &.active {
          border-left: 2px solid var(--purple);
          color: var(--purple);
        }
      }
    }
  }

  article {
    flex: 4;
    padding: 10px;

    div {
      display: flex;
      gap: 10px;

      a {
        color: var(--purple);
        &:hover {
          color: var(--gray);
        }
      }
    }

    p {
      font-size: var(--fs-xs);
      color: var(--gray);
    }

    ul {
      list-style: none;

      li {
        display: flex;
        gap: 5px;
        padding-bottom: 10px;
      }
    }
  }

  ${media.sm`
    width: 100%;
    flex-direction: column;
    aside {
    overflow: scroll;
    scrollbar-width: none;
    ul {
      display: flex;
      flex-direction: row;
      flex-shrink: 0;
      min-width: max-content;
      li {
          transition: color 0.3s ease;
          border-bottom: 2px solid var(--gray);
          border-left: 0;
          padding: 10px 15px;
          &:hover {
            color: var(--purple);
            background-color: var(--black);
          }

          &.active {
            border-bottom: 2px solid var(--purple);
            border-left: 0;
            color: var(--purple);
          }
        }
      }
    }
    `}
`;
