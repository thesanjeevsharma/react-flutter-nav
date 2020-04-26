import React from "react";
import { NavContext } from "../../context";

import { Home, Profile, Messages, Settings } from "../";

import { StyledContainer } from "./styled";

const Main = () => {
  const { state } = React.useContext(NavContext);

  const renderComponent = () => {
    switch (state.current) {
      case "home":
        return <Home />;
      case "profile":
        return <Profile />;
      case "messages":
        return <Messages />;
      case "settings":
        return <Settings />;
      default:
        return <Home />;
    }
  };

  return <StyledContainer>{renderComponent()}</StyledContainer>;
};

export default Main;
