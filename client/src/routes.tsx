import React from 'react'
import { useSelector } from 'react-redux'
import {Switch, Route, Redirect} from 'react-router-dom'
import { AuthPage } from './modules/authorization/AuthPage'
import { BasketPage } from './modules/basket/BasketPage'


interface LoginState {
    token: String,
    userId: String,
    isEnter: Boolean
}

interface Store {
    loginReducer: LoginState
}

export const useRoutes = (isAuthenticated: boolean) => {
    const isEnter = useSelector((state: Store) => state.loginReducer.isEnter)

    if(isAuthenticated || isEnter){
        return (
            <Switch>
                <Route path="/basket">
                    <BasketPage />
                </Route>
                <Redirect to="/create"/>
            </Switch>
        )
    }

    return (
        <Switch>
            <Route path="/">
                <AuthPage />
            </Route>
            <Redirect to="/"/>
        </Switch>
    )
}