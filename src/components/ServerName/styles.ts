import styled from "styled-components";
import { ExpandMore } from "styled-icons/material";

export const Container = styled.div`
  grid-area: SN;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--secondary);

  padding: 0 16px;

  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;
  z-index: 2;
`;

export const Title = styled.h1`
  color: var(--white);
  font-size: 16px;
`;

export const ExpandIcon = styled(ExpandMore)`
  color: var(--white);
  height: 24px;
  cursor: pointer;
`;
