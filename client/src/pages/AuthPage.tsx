import React, { useState } from 'react'
import {useDispatch} from "react-redux"
import { fetchLogin, enter, fetchRegin } from '../store/loginReducer'


export const AuthPage: React.FC = () => {
    const dispatch = useDispatch()

    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    const changeHandler = (event: any) => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const registaration = () => {
        try {
            dispatch(fetchRegin('/api/auth/register', 'POST', form, {}))
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
                            // disabled={loading}
                            onClick={login}
                        >
                            log in
                        </button>
                        <button 
                            className="btn grey darken-2"
                            onClick={registaration}
                            // disabled={loading}
                        >
                            reg in
                        </button>
                    </div>
                </div>
            </div> 
        </div>
    )
}