import React, { useEffect, useState } from 'react'
import { useHttp } from '../hooks/http.hook'
import { useMessage } from '../hooks/message.hook'
import {useDispatch} from "react-redux"
import { fetchLogin, enter } from '../store/loginReducer'


export const AuthPage = () => {
    const {loading, error, request, clearError} = useHttp()
    const message = useMessage()
    const dispatch = useDispatch()

    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError])

    useEffect(() => {
        window.M.updateTextFields()
    }, [])

    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const registaration = async () => {
        try {
            const data = await request('/api/auth/register', 'POST', {...form})
            message(data.message)
        } catch(e){}
    }

    const login = () => {
        
        try {
            dispatch(fetchLogin('/api/auth/login', 'POST', form, {}))
            dispatch(enter(false))
        } catch(e){}
    }

    return (
        <div className="row">
            <div className="col s6 offset-s3">
                <h1>Authorization</h1>
                <div className="card blue darken-1">
                    <div className="card-content white-text">
                        <div>
                            <div className="input-field">
                                <input 
                                    placeholder="enter email" 
                                    id="email" 
                                    type="text" 
                                    name="email"
                                    value={form.email}
                                    onChange = {changeHandler}
                                />
                                <label htmlFor="email"></label>
                            </div>

                            <div className="input-field">
                                <input 
                                    placeholder="enter password" 
                                    id="password" 
                                    type="text" 
                                    name="password"
                                    value={form.password}
                                    onChange = {changeHandler}
                                />
                                <label htmlFor="password"></label>
                            </div>

                        </div>
                    </div>

                    <div className="card-action">
                        <button 
                            className="btn yellow darken-4" 
                            style={{marginRight:10}} 
                            disabled={loading}
                            onClick={login}
                        >
                            log in
                        </button>
                        <button 
                            className="btn grey darken-2"
                            onClick={registaration}
                            disabled={loading}
                        >
                            reg in
                        </button>
                    </div>
                </div>
            </div> 
        </div>
    )
}