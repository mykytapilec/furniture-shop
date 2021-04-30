import { useSelector } from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'

import Navbar from './modules/navbar/Navbar'
import { useRoutes } from './routes'

import 'materialize-css'


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

//   useEffect(() => {
//     // if(!!token){
//     //   dispatch(enter(false))
//     // }

//     // const data = JSON.parse(localStorage.getItem('userData') as string)

//     // if(data){
//     //   setToken(data.token)
//     // }
//     fetch("https://getrit-furniture-store.p.rapidapi.comhttps//getrit.com/API/Token?Token=Demo", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-key": "11ad070107mshc4533af604c2b7dp18d7b2jsn0094eb1c94e2",
// 		"x-rapidapi-host": "getrit-furniture-store.p.rapidapi.com"
// 	}
// })
// .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.error(err);
// });
//   }, [])

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
