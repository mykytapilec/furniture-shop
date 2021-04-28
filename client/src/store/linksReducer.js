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

export const fetchLinks = (url, method, body, headers) => {
    console.log(11111, url, method, body, headers)
    return {
        type: FETCH_LINKS,
        url,
        method,
        body,
        headers
    }
}