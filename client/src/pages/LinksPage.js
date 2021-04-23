// import React from 'react'

import { useCallback, useContext, useEffect, useState } from "react"
import { LinksList } from "../components/LinksList"
import { Loader } from "../components/Loader"
import { AuthContext } from "../context/AuthContext"
import { useHttp } from "../hooks/http.hook"
import {useDispatch} from "react-redux";
// import { fetchUser } from "../store/userReducer"
// import { fetchLinkss } from '../store/actions'

export const LinksPage = () => {
    const dispatch = useDispatch()
    // debugger
    
    const [links, setLinks] = useState([])
    const {loading, request} = useHttp()
    const {token} = useContext(AuthContext)

// console.log(request)
    

    const fetchLinks = useCallback(async () => {
        try {
            // const fetched = await request(`/api/link/`, 'GET', null, {
            //     Authorization: `Bearer ${token}`
            // })
            // console.log(fetched)
            // setLinks(fetched)
            dispatch(fetchLinks())
        } catch(e){}
    }, [token, request])

    // const fetchLinks = () => ({type: FETCH_LINKS})
    

    useEffect(() => {
        // fetchLinks()
        // dispatch(fetchUser())
        // dispatch(fetchLinks())
    }, [fetchLinks])

    if(loading){
        return <Loader />
    }

    return (
        <div>
            {!loading && <LinksList links={links} />}
        </div>
    )
}