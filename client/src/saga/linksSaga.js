import { useContext } from "react";
import {put, takeEvery, call} from "redux-saga/effects"
import { AuthContext } from "../context/AuthContext";
import {FETCH_LINKS, FETCH_USER, setLinks, setUser} from "../store/linksReducer";

// const auth = useContext(AuthContext)

// console.log(auth.token)

let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiO…cxNX0.yKOJ3UrpPVXR4eiQ-O__s3hDBdQ6ynnj4cDV9O7UL6c'

const fetchLinksFromApi = async (url = `/api/link/`, method = `GET`, body = null, headers = {
    Authorization: `Bearer ${token}`
}) => {
    console.log(url)
    console.log(method)
    console.log(body)
    console.log(headers)
    // debugger
    return await fetch(url, {method,body,headers})
}

function* fetchLinksWorker() {
    const data = yield call(fetchLinksFromApi)
    // debugger
    console.log(data)
    const json = yield call(() => new Promise(res => res(data.json())))
    yield put(setLinks(json))
}

export function* linksWatcher() {
    yield takeEvery(FETCH_LINKS, fetchLinksWorker)
}