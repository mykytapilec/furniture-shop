import { FETCH_LOGIN, setLogin } from "../store/loginReducer"
import {put, takeEvery, call} from "redux-saga/effects"

const fetchLoginFromApi = async (url = '/api/auth/login', method = 'POST', body = {
    email: 'q@mail.ru',
    password: '111111'
}, headers = {}) => {
    console.log(url)
    console.log(method)
    console.log(body)
    console.log(headers)
    // debugger
    return await fetch(url, {method, body, headers})
}

function* fetchLoginWorker() {
    const data = yield call(fetchLoginFromApi)
    // debugger
    console.log(data)
    const json = yield call(() => new Promise(res => res(data.json())))
    yield put(setLogin(json))
}

export function* loginWatcher() {
    yield takeEvery(FETCH_LOGIN, fetchLoginWorker)
}