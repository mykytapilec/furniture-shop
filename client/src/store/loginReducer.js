const defaultState = {
    token: '',
    userId: '',
    isEnter: true
}

export const SET_LOGIN = "SET_LOGIN"
export const FETCH_LOGIN = "FETCH_LOGIN"
export const LOGOUT = 'LOGOUT'
export const ENTER = 'ENTER'

export default function loginReducer(state = defaultState, action) {
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

export const setLogin = payload => ({type: SET_LOGIN, payload})
export const enter = flag => ({type: ENTER, flag})
export const logout = () => ({type: LOGOUT})

export const fetchLogin = (url, method, form, headers) => {
    return {
        type: FETCH_LOGIN,
        url,
        method,
        form,
        headers
    }
}