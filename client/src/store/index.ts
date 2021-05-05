import {all} from 'redux-saga/effects'
import { loginWatcher } from '../modules/authorization/store/loginSaga'
import { reginWatcher } from '../modules/authorization/store/reginSaga'
import {applyMiddleware, combineReducers, createStore} from 'redux'
import loginReducer from '../modules/authorization/store/loginReducer'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'



function* rootWatcher() {
    yield all([loginWatcher(), reginWatcher()])
}

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    loginReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootWatcher)