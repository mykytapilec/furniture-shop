import { ENTER, LOGOUT, SET_LOGIN } from './keys'

interface LoginState {
    token: String,
    userId: String,
    isEnter: Boolean
}

interface Payload {
    token: String,
    userId: String
}

interface Form {
    email: String,
    password: String
}

interface Headers {
    token?: String,
    userId?: String,
}

interface Action {
    type: String,
    url: String,
    method: String,
    payload: Payload,
    flag: Boolean,
    form: Form,
    headers: Headers
}

const defaultState: LoginState = {
    token: '',
    userId: '',
    isEnter: true
}

// export const SET_LOGIN: string = "SET_LOGIN"
// export const FETCH_LOGIN: string = "FETCH_LOGIN"
// export const FETCH_REGIN: string = "FETCH_REGIN"
// export const LOGOUT: string = 'LOGOUT'
// export const ENTER: string = 'ENTER'

export default function loginReducer(state = defaultState, action: Action) {
    switch(action.type) {
        case SET_LOGIN:
            localStorage.setItem('userData', JSON.stringify({
                userId: action.payload.userId,
                token: action.payload.token,
            }))
            localStorage.setItem('isEnter', JSON.stringify({
                isEnter: state.isEnter
            }))
            
            return {
                ...state, 
                token: action.payload.token,
                userId: action.payload.userId,
            }
        case LOGOUT:
            return {
                ...defaultState, 
                isEnter:false
            }
        case ENTER:
            return {
                ...state, 
                isEnter: action.flag
            }
    }
    return state
}

// export const setLogin = (payload: Payload)  => ({type: SET_LOGIN, payload})
// export const enter = (flag: Boolean) => ({type: ENTER, flag})
// export const logout = () => ({type: LOGOUT})

// export const fetchLogin = (url: String, method: String, form: Form, headers: Headers) => {
//     return {
//         type: FETCH_LOGIN,
//         url,
//         method,
//         form,
//         headers
//     }
// }

// export const fetchRegin = (url: String, method: String, form: Form, headers: Headers) => {
//     return {
//         type: FETCH_REGIN,
//         url,
//         method,
//         form,
//         headers
//     }
// }