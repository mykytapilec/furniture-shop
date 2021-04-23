import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import rootReducer from './store/reducer';
import { Provider } from 'react-redux'
// import { createStore, applyMiddleware } from 'redux';
// import createSaga from 'redux-saga'
// import { composeWithDevTools } from 'redux-devtools-extension';
import {store} from './store/index';

console.log(store)
// import { watch } from './store/sagas'

// const saga = createSaga()

// let store = createStore(rootReducer, composeWithDevTools(applyMiddleware(saga)))

// saga.run(watch)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

