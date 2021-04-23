import { useContext } from "react"
// import { connect } from "react-redux"
import { NavLink, useHistory } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"
import {useDispatch, useSelector} from "react-redux";

const Navbar = () => {

    const count = useSelector(state => state)

    console.log(count)

    const auth = useContext(AuthContext)
    const history = useHistory()

    const logoutHandler = event => {
        event.preventDefault()
        auth.logout()
        history.push('/')
    }

    return (
        <nav>
            <div className="nav-wrapper blue darken-1" style={{ padding: '0 2rem'}}>
            <span className="brand-logo">cutting links</span>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><NavLink to="/create">create</NavLink></li>
                <li><NavLink to="/links">links</NavLink></li>
                <li><NavLink to="/basket">basket</NavLink></li>
                <li><a href="/" onClick={logoutHandler}>exit</a></li>
            </ul>
            </div>
        </nav>
    )
}

// const mapStateToProp = state => {
//     console.log(state)
//     return {
//         myPost: state.firstReducer.stateprop
//     }
// }

// export default connect(mapStateToProp,null)(Navbar)
export default Navbar