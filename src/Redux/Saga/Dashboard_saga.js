import {put,takeEvery} from 'redux-saga/effects'
import { LoaderTypes } from '../Actiontypes/Loader_types'
import {Dashboard_types} from '../Actiontypes/Dashboard_types'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function* dashboardData(){
    yield put({type:LoaderTypes.LOADER_START})

    try{
        const url="https://reqres.in/api/users"
        // const url = `${process.env.REACT_APP_API_URL}/users`
        const res=yield axios.get(url)
        yield put({type:Dashboard_types.USER_DATA_REQUEST_SUCCESS,data: res.data.data})
        console.log('dash_saga',res.data.data)
    }
    catch(e){

    }
    yield put({ type: LoaderTypes.LOADER_STOP});
}
//user request by id
function* userRequest(data,callback){
 console.log('da',data.data.id);
    yield put({type:LoaderTypes.LOADER_START})

    try{
        const url=`https://reqres.in/api/users/${data.data.id}`
        // const url = `${process.env.REACT_APP_API_URL}/users`
        const res=yield axios.get(url)
        yield put({type:Dashboard_types.PERSON_REQUST_SUCCESS,data: res.data.data})
        console.log('dash_saga',res.data.data)
        callback(true);
    }
    catch(e){

    }
    yield put({ type: LoaderTypes.LOADER_STOP});
}

export default function* dashboardSaga(){
    yield takeEvery(Dashboard_types.USER_DATA_REQUEST,dashboardData);
    yield takeEvery(Dashboard_types.PERSON_REQUST,userRequest)
}