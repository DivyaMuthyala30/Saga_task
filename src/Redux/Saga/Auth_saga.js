import { takeEvery,put} from "redux-saga/effects"
import {Auth_types } from "../Actiontypes/Auth_types";
import { LoaderTypes } from "../Actiontypes/Loader_types";

//login
function* login({ callback }) {
    yield put({ type: LoaderTypes.LOADER_START });
    try {
        callback(true);
        yield put({ type: Auth_types.LOGIN_SUCCESS, data: {} });
    }
    catch (e) {
        // callback(true);
    }
    yield put({ type: LoaderTypes.LOADER_STOP });
}

//logout
function* logout({ callback }) {
    yield put({ type: LoaderTypes.LOADER_START });
    try {
        callback(true);
        yield put({ type: Auth_types.LOGOUT_SUCCESS, data: {} });
    }
    catch (e) {
        // callback(true);
    }
    yield put({ type: LoaderTypes.LOADER_STOP });
}

export default function* Auth_saga() {
    yield takeEvery(Auth_types.LOGIN_REQUEST, login);
    yield takeEvery(Auth_types.LOGOUT_REQUEST, logout);
}