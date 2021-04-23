const defaultState = {
    links: []
}

export const SET_LINKS = "SET_LINKS"
export const FETCH_LINKS = "FETCH_LINKS"

export default function linksReducer(state = defaultState, action) {
    switch(action.type) {
        case SET_LINKS:
            return {...state, links: action.payload}
    }
    return state
}

export const setLinks = payload => ({type: SET_LINKS, payload})
export const fetchLinks = () => ({type: FETCH_LINKS})