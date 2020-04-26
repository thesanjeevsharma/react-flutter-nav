import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 60px;
  box-shadow: 0 0 5px 1px #efefef;
  z-index: 10;
`;

export const StyledLink = styled.div`
  display: flex;
  align-items: center;
  border-radius: 20px;
  cursor: pointer;
  padding: 8px;
  color: ${props => (props.active ? "#253C59" : "#DFF1F8")};
  background: ${props => (props.active ? "#DFF1F8" : "#fff")};
  width: ${props => (props.active ? "120px" : "36px")};
  overflow: hidden;
  -webkit-transition: all 0.2s ease-in;
  -moz-transition: all 0.2s ease-in;
  -o-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
`;

export const StyledIcon = styled.span``;

export const StyledTitle = styled.span`
  margin-left: 8px;
  font-weight: 600;
`;
