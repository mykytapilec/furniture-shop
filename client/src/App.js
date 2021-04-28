import 'materialize-css'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'
import Navbar from './components/Navbar'
import { useRoutes } from './routes'
import { enter } from "./store/loginReducer"


function App() {
  const dispatch = useDispatch()
  const [token, setToken] = useState('')
  let tokenFromStore = useSelector(state => state.loginReducer.token)
  const isEnter = useSelector(state => state.loginReducer.isEnter)
  const isAuthenticated = !!tokenFromStore || !!token 
  const routes = useRoutes(isAuthenticated)

  useEffect(() => {
    if(!!token){
      dispatch(enter(false))
    }

    const data = JSON.parse(localStorage.getItem('userData'))

    if(data){
      setToken(data.token)
    }
}, [token])

  // if(!ready){
  //   return <Loader />
  // }

  return (
      <Router>
        { isAuthenticated || isEnter ? <Navbar isAuthenticated={isAuthenticated} /> : null}
        <div className="container">
          <h1>
            {routes}
          </h1>
        </div>
      </Router>
  )
}

export default App
