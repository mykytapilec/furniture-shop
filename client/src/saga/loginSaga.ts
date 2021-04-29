import { FETCH_LOGIN, setLogin } from "../store/loginReducer"
import {put, takeEvery, call} from "redux-saga/effects"

interface Params {
    url: string,
    method: string,
    form: string,
    headers: any
}

const fetchLoginFromApi = (params: Params) => {
    let {url, method, form, headers} = params
    if(form){
        form = JSON.stringify(form)
        headers['Content-Type'] = 'application/json'
    }
    return fetch(url, {method, body: form, headers})
}


function* fetchLoginWorker(args: any): Generator<
    any,
    any,
    any
    > {
        const data = yield call(fetchLoginFromApi, args)
        const json = yield call(() => new Promise(res => res(data.json())))
        yield put(setLogin(json))
    }

export function* loginWatcher() {
    yield takeEvery(FETCH_LOGIN, fetchLoginWorker)
}