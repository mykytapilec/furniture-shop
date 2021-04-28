// import React from 'react'
import { useParams } from "react-router-dom"

import { useCallback, useContext, useEffect, useState } from "react"
import { useHttp } from "../hooks/http.hook"
import { AuthContext } from "../context/AuthContext"
import { Loader } from "../components/Loader"
import { LinkCard } from "../components/LinkCard"
import { useSelector } from "react-redux"

export const DetailPage = () => {
    // const {token} = useContext(AuthContext)
    const {request, loading} = useHttp()
    const [link, setLink] = useState(null)
    const token = useSelector(state => state.loginReducer.token)
    const linkId = useParams().id

    console.log(linkId)

    const getLink = useCallback( async () => {
        try {
            const fetched = await request(`/api/link/${linkId}`, 'GET', null, {
                Authorization: `Bearer ${token}`
            })
            setLink(fetched)
        } catch(e){}
    }, [token, linkId, request])

    useEffect(() => {
        getLink()
    }, [getLink])

    if(loading){
        return <Loader />
    }

    return (
        <div>
            {!loading && link && <LinkCard link={link} />}
        </div>
    )
}