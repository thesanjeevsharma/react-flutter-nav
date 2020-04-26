import styled, { keyframes } from "styled-components";

const load = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.2;
  }
  100% {
    opacity: 1;
  }
`;

export const Placeholder = styled.div`
  background: #efefef;
  padding: 4px;
  width: ${props => props.width || "auto"};
  height: ${props => props.height || "auto"};
  border-radius: ${props => (props.rounded ? "100%" : "8px")};
  margin-bottom: ${props => props.margin || "16px"};
  animation: ${load} 2s linear infinite;
`;

export const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(${props => props.cuts || 2}, 1fr);
  grid-gap: 16px;
`;
