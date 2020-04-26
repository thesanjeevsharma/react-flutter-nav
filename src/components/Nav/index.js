import React from "react";

import { NavContext } from "../../context";

import { StyledWrapper, StyledLink, StyledIcon, StyledTitle } from "./styled";
import { HomeIcon, ProfileIcon, MessageIcon, SettingsIcon } from "../../icons";

const Nav = () => {
  const { state, dispatch } = React.useContext(NavContext);

  return (
    <StyledWrapper>
      <StyledLink
        active={state.current === "home"}
        onClick={() => dispatch({ type: "SWITCH", payload: { value: "home" } })}
      >
        <StyledIcon>
          <HomeIcon color={state.current === "home" ? "#253C59" : "#333"} />
        </StyledIcon>
        <StyledTitle>Home</StyledTitle>
      </StyledLink>
      <StyledLink
        active={state.current === "messages"}
        onClick={() =>
          dispatch({ type: "SWITCH", payload: { value: "messages" } })
        }
      >
        <StyledIcon>
          <MessageIcon
            color={state.current === "messages" ? "#253C59" : "#333"}
          />
        </StyledIcon>
        <StyledTitle>Messages</StyledTitle>
      </StyledLink>
      <StyledLink
        active={state.current === "profile"}
        onClick={() =>
          dispatch({ type: "SWITCH", payload: { value: "profile" } })
        }
      >
        <StyledIcon>
          <ProfileIcon
            color={state.current === "profile" ? "#253C59" : "#333"}
          />
        </StyledIcon>
        <StyledTitle>Profile</StyledTitle>
      </StyledLink>
      <StyledLink
        active={state.current === "settings"}
        onClick={() =>
          dispatch({ type: "SWITCH", payload: { value: "settings" } })
        }
      >
        <StyledIcon>
          <SettingsIcon
            color={state.current === "settings" ? "#253C59" : "#333"}
          />
        </StyledIcon>
        <StyledTitle>Settings</StyledTitle>
      </StyledLink>
    </StyledWrapper>
  );
};

export default Nav;
