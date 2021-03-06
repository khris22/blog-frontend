import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './store.js'
// import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
// import thunk from 'redux-thunk'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
// import { BrowserRouter as Route } from 'react-router-dom';


// usersReducer: call it whatever you want
// import users from './reducers/users';
// import userReducer from './reducers/users'

// const users = () => []

// const reducer = combineReducers({
//   users
//   // users: userReducer
// })

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)) )

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
