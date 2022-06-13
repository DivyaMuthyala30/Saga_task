import { Dashboard_types } from "../Actiontypes/Dashboard_types";

const initialState = {
  UserDataRequests: [],
};

export default function DashboardReducer(state = initialState, action = null) {
  if (!state) {
    state = initialState;
  }
  switch (action.type) {
    case Dashboard_types.USER_DATA_REQUEST_SUCCESS: {
      return {
        ...state,
        UserDataRequests: action.data
      };
    }
    case Dashboard_types.PERSON_REQUST_SUCCESS: {
      return {
        ...state,
        Persondata: action.data
      };
    }
    default:
      return state;
  }
}