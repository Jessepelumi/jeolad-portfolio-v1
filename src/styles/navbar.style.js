import styled from "styled-components";
import { media } from "./breakpoints";

export const StyledNavbar = styled.div`
  padding: 1rem 8.33vw;
  position: fixed;
  width: 100%;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--background);
  z-index: 99;

  div {
    color: var(--purple);
    font-size: var(--fs-lg);
    cursor: pointer;
    transform: scale(1, 1);
    transition: transform 0.3s linear;
    &:hover {
      transform: scale(1.1, 1.1);
      transition: transform 0.3s linear;
    }
  }

  nav {
    width: 40%;
    font-size: var(--fs-sm);
    cursor: pointer;

    ul {
      display: flex;
      justify-content: space-between;
      list-style: none;

      li {
        a {
          text-decoration: none;

          span {
            padding-right: 5px;
            color: var(--purple);
          }

          color: var(--white);
          &:hover {
            color: var(--purple);
          }
        }
      }
    }
  }

  div.menu {
    display: none;
  }

  ${media.lg`
  nav {
    width: 55%;
  }
  `}

  ${media.md`
  nav {
    display: none;
  }

  div.menu {
    display: block;
  }
  `}
`;

export const StyledMenu = styled.aside`
  display: none;

  ${media.md`
  display: block;
  background-color: rgba(208, 162, 247, 0.1);
  width: 100%;
  height: 100vh;
  position: fixed;
  transition: 0.1s;
  z-index: 10;
  visibility: hidden;

  &.visible {
    visibility: visible;
  }

  section {
    color: white;
    width: 80%;
    height: 100vh;
    position: fixed;
    right: 0;
    transform: translateX(100%);
    transition: 0.3s linear;
    background-color: var(--background);
    z-index: 1000;

    &.show {
      transform: translateX(0);
    }

    nav {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding-top: 20%;
      font-size: var(--fs-md);
      ul {
        list-style: none;
        li a {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-bottom: 50%;
          span {
            color: var(--purple);
          }
        }
      }
    }
  }
  `}

  ${media.xs`
  section {
    nav {
      font-size: var(--fs-sm);
    }
  }
  `}

  ${media.xxs`
  section {
    nav {
      font-size: var(--fs-xs);
    }
  }
  `}
`;
