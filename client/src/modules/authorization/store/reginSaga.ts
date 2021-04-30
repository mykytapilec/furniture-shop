import {takeEvery, call} from "redux-saga/effects"
import { FETCH_REGIN } from "./keys"

interface Params {
    url: string,
    method: string,
    form: string,
    headers: any
}


const fetchReginFromApi = (params: Params) => {
    let {url, method, form, headers} = params
    if(form){
        form = JSON.stringify(form)
        headers['Content-Type'] = 'application/json'
    }
    return fetch(url, {method, body: form, headers})
}


function* fetchReginWorker(args: any): Generator<
    any
    > {
        yield call(fetchReginFromApi, args)
    }

export function* reginWatcher() {
    yield takeEvery(FETCH_REGIN, fetchReginWorker)
}