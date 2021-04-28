import { useSelector } from 'react-redux'
import {Switch, Route, Redirect} from 'react-router-dom'
import { AuthPage } from './pages/AuthPage'
import { BasketPage } from './pages/BasketPage'
import { DetailPage } from './pages/DetailPage'

export const useRoutes = isAuthenticated => {
    const isEnter = useSelector(state => state.loginReducer.isEnter)

    if(isAuthenticated || isEnter){
        return (
            <Switch>
                <Route path="/basket" exact>
                    <BasketPage />
                </Route>
                <Route path="/detail/:id">
                    <DetailPage />
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