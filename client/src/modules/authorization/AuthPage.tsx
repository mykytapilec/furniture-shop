import React, { useState, useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux"
import { useMessage } from '../../hooks/message.hook'

import { apiLogin, apiReg } from './constants'
import { fetchLogin, enter, fetchRegin, clearMessage } from './store/actions'


export const AuthPage: React.FC = () => {
    const dispatch = useDispatch()
    const message = useMessage()
    const err = useSelector((state: Store) => state.loginReducer.message)
    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    useEffect(() => {
        message(err)
      }, [
          err, 
          message, 
        //   clearError
        ])
    
    useEffect(() => {
        window.M.updateTextFields()
        // dispatch(clearMessage()) 
    }, [])

    const changeHandler = (event: any) => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const registaration = () => {
        try {
            dispatch(fetchRegin(apiReg, 'POST', form, {}))
            dispatch(clearMessage()) 
        } catch(e){}
    }

    const login = () => {
        try {
            dispatch(fetchLogin(apiLogin, 'POST', form, {}))
            dispatch(enter(false))
            dispatch(clearMessage()) 
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