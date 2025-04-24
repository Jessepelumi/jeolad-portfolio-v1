import styled from "styled-components";
import { media } from "./breakpoints";

export const StyledProjectCard = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
  padding-block: var(--padding-subject);
  direction: ${({ layout }) => layout || "ltr"};
  cursor: default;
  img {
    grid-column-end: span 7;
    width: 100%;
    filter: grayscale(100%);
    transform: scale(1, 1);
    transition: transform 0.3s linear;
    z-index: 0;
    &:hover {
      filter: grayscale(0);
      transform: scale(1.03, 1.03);
      transition: transform 0.3s linear;
    }
  }
  aside {
    z-index: 1;
    color: white;
    grid-column-start: 7;
    grid-column-end: span 7;
    margin-top: -60%;
    h2 {
      font-size: var(--fs-md);
      padding-bottom: 1%;
      text-align: ${({ text }) => text || "right"};
    }
    div {
      background-color: var(--black);
      padding: var(--button-padding);
      border-bottom: 3px solid var(--purple);
      text-align: ${({ text }) => text || "left"};
    }
    section {
      b {
        color: var(--gray);
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        padding-top: 1%;
        justify-content: ${({ text }) => text || "right"};
        flex-direction: ${({ direction }) => direction || "row-reverse"};
      }
      i {
        display: flex;
        gap: 10px;
        padding-top: 1%;
        justify-content: ${({ text }) => text || "right"};
        flex-direction: ${({ direction }) => direction || "row-reverse"};
        a {
          text-decoration: none;
          color: var(--white);
          &:hover {
            color: var(--purple);
          }
        }
      }
    }
  }

  ${media.lg`
  aside {
    margin-top: -65%;
  }
  `}

  ${media.md`
  display: block;
  background-color: var(--background);
  background-image: ${({ backgroundimg }) =>
    `url(${require(`../components/images/${backgroundimg}`)})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-blend-mode: overlay;
  margin-top: 5%;
  position: relative;
  img {
    display: none;
  }
  aside {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 0;
    height: 100%;
    h2 {
      text-align: left;
      padding-left: var(--button-padding);
    }
    div {
      background-color: transparent;
      padding: var(--button-padding);
      border-bottom: none;
      text-align: left;
      
    }
    section {
      
      padding-block: 3%;
      width: 100%;
      b {
        color: var(--gray);
        display: flex;
        gap: 10px;
        padding-top: 1%;
        padding-left: var(--button-padding);
        flex-direction: ${({ direction }) => direction || "row-reverse"};
        justify-content: left;
      }
      i {
        display: flex;
        gap: 10px;
        padding-top: 3%;
        padding-left: var(--button-padding);
        flex-direction: ${({ direction }) => direction || "row-reverse"};
        justify-content: left;
      }
    }
  }
  `}

  ${media.sm``}

  ${media.xxs`
  
  aside {
    div {
      font-size: var(--fs-sm);
    }
    b, i {
      gap: 5px;
      font-size: var(--fs-xs);
    }
  }
  `}
`;
