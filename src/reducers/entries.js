const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_ENTRIES":
      return action.entries
    case "CLEAR_ENTRIES":
      return initialState
    case "ADD_ENTRY":
      return state.concat(action.entry)
      // concat() works to update state is that .concat() creates a new array, leaving the old array intact, and then returns the changed array
    case "UPDATE_ENTRY":
      // update state of one particular entry
      // map is nondestructive 
      return state.map(entry => entry.id === action.entry.id ? action.entry : entry)
    case "DELETE_ENTRY":
      // can also use slice~ but needs more data not just id
      // filter returns an array
        return state.filter(entry => entry.id === action.entryId ? false : true)

    default:
      return state
  }
}