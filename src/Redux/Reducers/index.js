import { combineReducers } from "redux";
import LoaderReducer from "./loader_reducer";
import AuthReducer from "./auth_reducer";
import DashboardReducer from './Dashboard_reducer';

const RootReducer = combineReducers({
  Loader: LoaderReducer,
  Auth: AuthReducer,
  Dashboard: DashboardReducer,
});

export default RootReducer;