import { ENTER, ERROR, FETCH_LOGIN, FETCH_REGIN, LOGOUT, SET_LOGIN, CLEAR_MESSAGE } from './keys'

interface Form {
    email: String,
    password: String
}

interface Payload {
    token: String,
    userId: String
}

interface Headers {
    token?: String,
    userId?: String,
}

export const setLogin = (payload: Payload)  => ({type: SET_LOGIN, payload})
export const clearMessage = () => ({type: CLEAR_MESSAGE}) // ?????
export const enter = (flag: Boolean) => ({type: ENTER, flag})
export const logout = () => ({type: LOGOUT})
export const error = (payload: Payload)  => ({type: ERROR, payload})


export const fetchLogin = (url: String, method: String, form: Form, headers: Headers) => {
    return {
        type: FETCH_LOGIN,
        url,
        method,
        form,
        headers
    }
}

export const fetchRegin = (url: String, method: String, form: Form, headers: Headers) => {
    return {
        type: FETCH_REGIN,
        url,
        method,
        form,
        headers
    }
}