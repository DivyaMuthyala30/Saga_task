import { all } from "redux-saga/effects";
import Auth_saga from "./Auth_saga";

// import LoggerSaga from "./logger_saga";
import dashboardSaga from "./Dashboard_saga";
import LoggerSaga from "./Loader_saga";
// import TechnicianSaga from "./technician_saga";
// import CustomerSaga from "./customer_saga";

export default function* RootSaga() {
  // yield all([LoggerSaga(), AuthSaga(), DashboardSaga(), TechnicianSaga(), CustomerSaga()]);
  yield all([ Auth_saga(), dashboardSaga(),LoggerSaga()]);
}