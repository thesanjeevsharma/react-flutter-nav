import React from "react";

export const NavContext = React.createContext();

export const state = {
  current: "home"
};

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case "SWITCH": {
      return {
        ...state,
        current: payload.value
      };
    }
    default: {
      return state;
    }
  }
};
