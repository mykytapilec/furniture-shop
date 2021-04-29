import 'materialize-css'
import { useSelector } from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'
import Navbar from './components/Navbar'
import { useRoutes } from './routes'

interface LoginState {
  token: string,
  userId: string,
  isEnter: boolean
}

interface Store {
  loginReducer: LoginState
}

const App: React.FC = () => {
  let tokenFromStore = useSelector((state: Store) => state.loginReducer.token)
  const isEnter = useSelector((state: Store) => state.loginReducer.isEnter)
  const isAuthenticated: boolean = !!tokenFromStore
  const routes = useRoutes(isAuthenticated)

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
