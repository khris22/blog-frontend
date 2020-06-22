import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
// import users from './reducers/users';
import currentUser from './reducers/currentUser';
import loginForm from './reducers/loginForm';
import entries from './reducers/entries';
import signupForm from './reducers/signupForm';
import entryForm from './reducers/entryForm'

const reducer = combineReducers({
    // users,
    currentUser,
    loginForm,
    signupForm,
    entries,
    entryForm
    // users: userReducer (different syntax) - renaming the userReducer to users -- has a different import
  })
  
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  
  const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)) )

  export default store