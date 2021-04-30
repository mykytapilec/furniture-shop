import 'materialize-css'
// import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'
import Navbar from './components/Navbar'
import { useRoutes } from './routes'
// import { enter } from "./store/loginReducer"

interface LoginState {
  token: string,
  userId: string,
  isEnter: boolean
}

interface Store {
  loginReducer: LoginState
}

const App: React.FC = () => {
  // const dispatch = useDispatch()
  // const [token, setToken] = useState('')
  // const data = JSON.parse(localStorage.getItem('userData') as string)
  let tokenFromStore = useSelector((state: Store) => state.loginReducer.token)
  const isEnter = useSelector((state: Store) => state.loginReducer.isEnter)
  const isAuthenticated: boolean = !!tokenFromStore
  const routes = useRoutes(isAuthenticated)

  // useEffect(() => {
  //   if(!!token){
  //     dispatch(enter(false))
  //   }

  //   const data = JSON.parse(localStorage.getItem('userData') as string)

  //   if(data){
  //     setToken(data.token)
  //   }
  // }, [token, dispatch])

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
