import { useSelector } from 'react-redux'
import {Switch, Route, Redirect} from 'react-router-dom'
import { AuthPage } from './pages/AuthPage'
import { BasketPage } from './pages/BasketPage'

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
                <Route path="/basket" exact>
                    <BasketPage />
                </Route>
                <Redirect to="/create"/>
            </Switch>
        )
    }

    return (
        <Switch>
            <Route path="/" exact>
                <AuthPage />
            </Route>
            <Redirect to="/"/>
        </Switch>
    )
}