import { useCallback } from "react"
import { NavLink } from "react-router-dom"
import {useDispatch} from "react-redux"
import { logout, enter } from "../store/loginReducer"

const Navbar = ({isAuthenticated}) => {
    const dispatch = useDispatch()

    const logoutHandler = useCallback(() => {
        try {
            dispatch(logout())
            localStorage.removeItem('userData')
            dispatch(enter(true))
        } catch(e){}
    }, [])

    const enterHandler = () => {
        dispatch(enter(false))
    }

    return (
        <nav>
            <div className="nav-wrapper blue darken-1" style={{ padding: '0 2rem'}}>
            <span className="brand-logo">furniture shop</span>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                {isAuthenticated && <li><NavLink to="/basket">basket</NavLink></li>}
                {isAuthenticated && <li><span onClick={logoutHandler}>exit</span></li>}
                {isAuthenticated || <li><span onClick={enterHandler}>enter</span></li>}
            </ul>
            </div>
        </nav>
    )
}


export default Navbar