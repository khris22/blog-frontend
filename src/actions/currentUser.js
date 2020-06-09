import { resetLoginForm } from "./loginForm"
import { getEntries } from './entries'

// clearing out the user on frontend
export const setCurrentUser = user => {
    return {
      type: "SET_CURRENT_USER",
      user
    }
  }

export const login = (credentials) => {
    console.log(credentials)
    return dispatch => {
      return fetch("http://localhost:3001/api/v1/login", {
        credentials: "include",
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(credentials)
      })
        .then(r => r.json())
        .then(response => {
          if (response.error) {
            alert(response.error)
          } else {
            // dispatch comes from redux
            dispatch(setCurrentUser(response.data))
            dispatch(getEntries())
            dispatch(resetLoginForm())
            // history.push('/')
          }
        })
        .catch(console.log)
    }
  }

  export const getCurrentUser = () => {
    return dispatch => {
      return fetch("http://localhost:3001/api/v1/get_current_user", {
        credentials: "include",
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      })
        .then(r => r.json())
        .then(response => {
          if (response.error) {
            alert(response.error)
          } else {
            dispatch(setCurrentUser(response.data))
            dispatch(getEntries())
          }
        })
        .catch(console.log)
    }
  }
  
  export const clearCurrentUser = () => {
    return {
      type: "CLEAR_CURRENT_USER"
    }
  }

  export const logout = () => {
    return dispatch => {
      // optimistic approach
      dispatch(clearCurrentUser())
      // dispatch(clearTrips())
      return fetch('http://localhost:3001/api/v1/logout', {
        credentials: "include",
        method: "DELETE"
      })
    }
  }