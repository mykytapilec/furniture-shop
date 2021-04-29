import {applyMiddleware, combineReducers, createStore} from "redux"
import loginReducer from "./loginReducer"
import createSagaMiddleware from 'redux-saga'
// import {countWatcher} from "../saga/countSaga"
import {rootWatcher} from "../saga"
import { composeWithDevTools } from "redux-devtools-extension"


const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    loginReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootWatcher)