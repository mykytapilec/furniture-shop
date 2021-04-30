import {all} from "redux-saga/effects"
import { loginWatcher } from "./loginSaga"
import { reginWatcher } from "./reginSaga"

export function* rootWatcher() {
    yield all([loginWatcher(), reginWatcher()])
}