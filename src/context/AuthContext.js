import React from "react";

const INIT_STATE = {
  user: null,
};
export const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "CHECK_USER":
      return { ...state, user: action.playload };
    default:
      return state;
  }
};

const AuthContext = () => {
  return <div></div>;
};

export default AuthContext;
