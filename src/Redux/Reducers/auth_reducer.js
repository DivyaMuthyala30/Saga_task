import {Auth_types } from "../Actiontypes/Auth_types";

const initialState = {};

export default function AuthReducer(state = initialState, action = null) {
  if (!state) {
    state = initialState;
  }
  switch (action.type) {
    case Auth_types.LOGIN_SUCCESS: {
      // const { token } = action.data;

      localStorage.setItem("token", 123);
      // localStorage.setItem("user", JSON.stringify(action.data));
      return {
        // ...action.data,
      };
    }
    case Auth_types.LOGOUT_SUCCESS: {
      localStorage.clear();
      return {
        
      }
    }
    default:
      return state;
  }
}