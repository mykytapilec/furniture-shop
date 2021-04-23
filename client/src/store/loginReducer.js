const defaultState = {
    token: '',
    userId: ''
}

export const SET_LOGIN = "SET_LOGIN"
export const FETCH_LOGIN = "FETCH_LOGIN"

export default function loginReducer(state = defaultState, action) {
    switch(action.type) {
        case SET_LOGIN:
            return {
                ...state, 
                token: action.payload.token,
                userId: action.payload.userId,
            }
    }
    return state
}

export const setLogin = payload => ({type: SET_LOGIN, payload})
export const fetchLogin = () => ({type: FETCH_LOGIN})