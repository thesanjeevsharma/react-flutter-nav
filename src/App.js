import React from "react";
import { createGlobalStyle } from "styled-components";

import { NavContext, state as initState, reducer } from "./context";

import { Main, Nav } from "./components";
import { StyledApp, StyledFooter } from "./styled";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Manrope', sans-serif;
  }
  body {
    background: #ddd;
  }
`;

export default function App() {
  const [state, dispatch] = React.useReducer(reducer, initState);

  return (
    <NavContext.Provider value={{ state, dispatch }}>
      <GlobalStyle />
      <StyledApp>
        <Main />
        <StyledFooter>
          <Nav />
        </StyledFooter>
      </StyledApp>
    </NavContext.Provider>
  );
}
