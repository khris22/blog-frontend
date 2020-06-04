

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
            dispatch(setCurrentUser(response))
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
            dispatch(setCurrentUser(response))
            // dispatch(getMyTrips())
          }
        })
        .catch(console.log)
    }
  }
  