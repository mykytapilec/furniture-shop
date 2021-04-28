// import React from 'react'

import { useCallback, useContext, useEffect, useState } from "react"
import { LinksList } from "../components/LinksList"
import { Loader } from "../components/Loader"
import { AuthContext } from "../context/AuthContext"
import { useHttp } from "../hooks/http.hook"
import {useDispatch, useSelector} from "react-redux";
import { fetchLinks } from "../store/linksReducer"
// import { fetchUser } from "../store/userReducer"
// import { fetchLinkss } from '../store/actions'

export const LinksPage = () => {
    const dispatch = useDispatch()
    // debugger
    
    // const [links, setLinks] = useState([])
    const {loading, request} = useHttp()
    // const {token} = useContext(AuthContext)
    const token = useSelector(state => state.loginReducer.token)
    const links = useSelector(state => state.linksReducer.links)

// console.log(request)
    

    // const fetchLinks = useCallback(async () => {
    //     try {
    //         // const fetched = await request(`/api/link/`, 'GET', null, {
    //         //     Authorization: `Bearer ${token}`
    //         // })
    //         // console.log(fetched)
    //         // setLinks(fetched)
    //         dispatch(fetchLinks())
    //     } catch(e){}
    // }, [token, request])

    // const fetchLinks = () => ({type: FETCH_LINKS})
    

    useEffect(() => {
        // fetchLinks()
        // dispatch(fetchUser())
        dispatch(fetchLinks('/api/link/', 'GET', null, {Authorization: `Bearer ${token}`}))
    }, [])

    if(loading){
        return <Loader />
    }

    return (
        <div>
            {!loading && <LinksList links={links} />}
        </div>
    )
}