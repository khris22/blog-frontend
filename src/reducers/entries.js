const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_ENTRIES":
      return action.entries
    case "CLEAR_ENTRIES":
      return initialState
    case "ADD_ENTRY":
      return state.concat(action.entry)
    default:
      return state
  }
}