import { FETCH_LOGIN, setLogin } from "../store/loginReducer"
import {put, takeEvery, call} from "redux-saga/effects"

const fetchLoginFromApi = params => {
    console.log(params)
    let {url, method, form, headers} = params
    if(form){
        form = JSON.stringify(form)
        headers['Content-Type'] = 'application/json'
    }
    console.log(url)
    console.log(method)
    console.log(form)
    console.log(headers)
    return fetch(url, {method, body: form, headers})
}

function* fetchLoginWorker(args) {
    console.log(args)
    const data = yield call(fetchLoginFromApi, args)
    // debugger
    console.log(data)
    const json = yield call(() => new Promise(res => res(data.json())))
    yield put(setLogin(json))
}

export function* loginWatcher() {
    yield takeEvery(FETCH_LOGIN, fetchLoginWorker)
}