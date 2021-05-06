import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'

import Navbar from './modules/navbar/Navbar'
import { useRoutes } from './routes'

import 'materialize-css'



interface LoginState {
  token: string,
  userId: string,
  isEnter: boolean,
  message: string
}

declare global {
  interface Store {
    loginReducer: LoginState
  }
}

// interface Store {
//   loginReducer: LoginState
// }

const App: React.FC = () => {
  const [token, setToken] = useState('')
  const [isAuthenticated, setAuthenticated] = useState(false)
  const isEnter = useSelector((state: Store) => state.loginReducer.isEnter)
  const tokenFromStore: string | boolean = useSelector((state: Store) => state.loginReducer.token)
  const routes = useRoutes(isAuthenticated)

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('userData') as string)
    const freshToken: boolean = !!tokenFromStore

    if(data && !freshToken){
      setToken(data.token)
    } else if(freshToken || !data) {
      setToken(tokenFromStore)
    } else {
      setToken('')
    }

    setAuthenticated(!!token)
  }, [token, tokenFromStore])

  return (
      <Router>
        { isAuthenticated || isEnter ? <Navbar isAuthenticated={isAuthenticated} /> : null}
        {/* <Navbar isAuthenticated={isAuthenticated} />  */}
        {/* { isAuthenticated || isEnter ? <Navbar isAuthenticated={isAuthenticated} /> : null} */}
        <div className="container">
          <h1>
            {routes}
          </h1>
        </div>
      </Router>
  )
}

export default App
