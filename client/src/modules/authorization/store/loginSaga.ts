import { FETCH_LOGIN } from './keys'
import {put, takeEvery, call} from 'redux-saga/effects'
import { setLogin } from './actions'

// interface Headres {
//     Content-Type?: string,
// }

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


function* fetchLoginWorker(args: any): any {
        const data = yield call(fetchLoginFromApi, args)
        const json = yield call(() => new Promise(res => res(data.json())))
        yield put(setLogin(json))
    }

export function* loginWatcher() {
    yield takeEvery(FETCH_LOGIN, fetchLoginWorker)
}