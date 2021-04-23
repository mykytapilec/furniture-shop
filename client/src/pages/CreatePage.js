// import React from 'react'

import { useContext, useState } from "react"
import { AuthContext } from "../context/AuthContext"
import { useHttp } from "../hooks/http.hook"
import { useHistory } from "react-router-dom"

export const CreatePage = () => {
    const [link, setLink] = useState('')
    const {request} = useHttp()
    const auth = useContext(AuthContext)
    const history = useHistory()

    const pressHandler = async event => {
        if(event.key === 'Enter'){
            try {
                const data = await request('/api/link/generate', 'POST', {from: link}, {Authorization: `Bearer ${auth.token}`})
                console.log(data)
                history.push(`/detail/${data.link._id}`)
            } catch (e){}
        }
    }

    return (
        <div className="row">
            <div className="col s8 offset-s2" style={{paddingTop: '2rem'}}>
                <div className="input-field">
                        <input 
                            placeholder="enter link" 
                            id="link" 
                            type="text" 
                            onChange = {e => setLink(e.target.value)}
                            value={link}
                            onKeyPress={pressHandler}
                        />
                        <label htmlFor="email"></label>
                </div>
            </div>
        </div>
    )
}