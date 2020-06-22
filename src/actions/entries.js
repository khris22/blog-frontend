// sync
export const setEntries = entries => {
    return {
      type: "SET_ENTRIES",
      entries
    }
  }

export const clearEntries = () => {
    return {
      type: "CLEAR_ENTRIES"
    }
  }

export const addEntry = entry => {
    return {
      type: "ADD_ENTRY",
      entry
    }
  }

// async
  export const getEntries = () => {
    return dispatch => {
      return fetch("http://localhost:3001/api/v1/entries", {
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
            dispatch(setEntries(response.data))
          }
        })
        .catch(console.log)
    }
  }