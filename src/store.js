import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import users from './reducers/users';
import currentUser from './reducers/currentUser';

const reducer = combineReducers({
    users,
    currentUser
    // users: userReducer (different syntax)
  })
  
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  
  const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)) )

  export default store