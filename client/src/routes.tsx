import { useSelector } from 'react-redux'
import {Switch, Route, Redirect} from 'react-router-dom'
import { AuthPage } from './modules/authorization/AuthPage'
import { BasketPage } from './modules/basket/BasketPage'
import React from 'react'
import { MainPage } from './modules/main/MainPage'

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
    // if(isAuthenticated || !isEnter){
        return (
            <Switch>
                <Route path="/main">
                    <MainPage />
                </Route>
                <Route path="/basket">
                    <BasketPage />
                </Route>
                <Redirect to="/"/>
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