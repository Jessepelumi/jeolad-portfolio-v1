import styled from "styled-components";
import { media } from "./breakpoints";

export const StyledExperience = styled.div`
  padding-inline: var(--padding-body);
  color: var(--white);
  padding-block: var(--padding-body-sm);
  section {
    padding-block: var(--padding-subject);
    p {
      margin-bottom: var(--padding-subject);
      color: var(--purple);
      font-size: var(--fs-sm);
    }
  }

  ${media.lg`
  padding-inline: var(--padding-body-sm);
  `}

  ${media.md`
  padding-inline: var(--padding-body-xs);
  padding-block: var(--padding-body-md);
  `}

  ${media.sm`
  padding-block: var(--padding-body-lg);
  `}
`;

export const StyledTechnologies = styled.div`
  white-space: wrap;
  padding-bottom: 35px;
  span {
    display: inline-block;
    margin-bottom: 5px;
    margin-right: 50px;
    padding: 5px;
    border-bottom: 3px solid var(--purple);
    cursor: default;
    &:hover {
      color: var(--gray);
      border-bottom: 3px solid var(--gray);
    }
  }

  ${media.md`
  span {
    margin-right: 20px;
  }
  `}

  ${media.xxs`
  span {
    font-size: var(--fs-xs);
  }
  `}
`;

export const StyledSkills = styled.div`
  white-space: wrap;
  span {
    display: inline-block;
    margin-bottom: 5px;
    margin-right: 50px;
    padding: 30px;
    border-bottom: 3px solid var(--purple);
    cursor: default;
    &:hover {
      color: var(--gray);
      border-bottom: 3px solid var(--gray);
    }
  }

  ${media.md`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  `}

  ${media.sm`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  `}

  ${media.xs`
  span {
    padding: 20px;
  }
  `}

  ${media.xxs`
  display: grid;
  grid-template-columns: 1fr;
  text-align: center;
  span {
    margin: 0 auto;
  }
  `}
`;
