import { ENTER, LOGOUT, SET_LOGIN, ERROR } from './keys'

interface LoginState {
    token: String,
    userId: String,
    isEnter: Boolean,
    message: String,
}

interface Payload {
    token: String,
    userId: String,
    errors: Array<any>,
    message: String,

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
    message: '',
    isEnter: true
}

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
                messeage: 'conected',
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
        case ERROR:
            return {
                message: action.payload.message,
            }
    }
    return state
}
