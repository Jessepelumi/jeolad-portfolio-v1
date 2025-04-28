import styled from "styled-components";
import { media } from "./breakpoints";

export const StyledFooter = styled.div`
  color: var(--gray);
  font-size: var(--fs-xs);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 3rem;

  a {
    color: var(--gray);
    &:hover {
      color: var(--white);
      text-decoration-color: var(--purple);
    }
  }

  ${media.xxs`
  text-align: center;
  `}
`;
