import 'materialize-css'
import {BrowserRouter as Router} from 'react-router-dom'
import { Loader } from './components/Loader';
import Navbar from './components/Navbar';
import { AuthContext } from './context/AuthContext';
import { useAuth } from './hooks/auth.hook';
import { useRoutes } from './routes';


function App() {
  const {token, login, logout, userId, ready} = useAuth()
  const isAuthenticated = !!token
  const routes = useRoutes(isAuthenticated)

  if(!ready){
    return <Loader />
  }

  return (
    <AuthContext.Provider value={{
      token, login, logout, userId, isAuthenticated
    }}>
      <Router>
        {/* { isAuthenticated && <Navbar />} */}
        <Navbar />
        <div className="container">
          <h1>
            {routes}
          </h1>
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
