import {all} from "redux-saga/effects"
import {linksWatcher} from "./linksSaga";
import { loginWatcher } from "./loginSaga";

export function* rootWatcher() {
    yield all([linksWatcher(), loginWatcher()])
}