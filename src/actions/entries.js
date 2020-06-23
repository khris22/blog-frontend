import { resetEntryForm } from './entryForm'


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

export const updateEntrySuccess = entry => {
    return {
      type: "UPDATE_ENTRY",
      entry
    }
  }

export const deleteEntrySuccess = entryId => {
    return {
      type: "DELETE_ENTRY",
      entryId
    }
  }

// async - need something to happen to update the store
// return a function that returns a promise
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

  export const createEntry = (entryData, history) => {
    return dispatch => {
      // use this when formatting does not match with backend
      // camelCased vs snake_cased
      const sendableEntryData = {
        title: entryData.title,
        notes: entryData.notes,
        user_id: entryData.userId
      }
      return fetch("http://localhost:3001/api/v1/entries", {
        credentials: "include",
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(sendableEntryData)
      })
        .then(r => r.json())
        .then(resp => {
          if (resp.error) {
            alert(resp.error)
          } else {
            // add trip to redux store, clearing form, going to restful route
            dispatch(addEntry(resp.data))
            dispatch(resetEntryForm())
            history.push(`/entries/${resp.data.id}`)    
          }
        })
        .catch(console.log)
  
    }
  }

  export const updateEntry = (entryData, history) => {
    return dispatch => {
      const sendableEntryData = {
        title: entryData.title,
        notes: entryData.notes,
        // not needed anymore:
        // user_id: entryData.userId
      }
      return fetch(`http://localhost:3001/api/v1/entries/${entryData.entryId}`, {
        credentials: "include",
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(sendableEntryData)
      })
        .then(r => r.json())
        .then(resp => {
          if (resp.error) {
            alert(resp.error)
          } else {
            dispatch(updateEntrySuccess(resp.data))
            // no need to do a dispatch on reset because of componentWillUnmount
            history.push(`/entries/${resp.data.id}`)
          }
        })
        .catch(console.log)
  
    }
  }

  export const deleteEntry = (entryId, history) => {
    return dispatch => {
      return fetch(`http://localhost:3001/api/v1/entries/${entryId}`, {
        credentials: "include",
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(r => r.json())
        .then(resp => {
          if (resp.error) {
            alert(resp.error)
          } else {
            dispatch(deleteEntrySuccess(entryId))
            history.push(`/entries`)
          }
        })
        .catch(console.log)  
    }
  }