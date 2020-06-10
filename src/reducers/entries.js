const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_ENTRIES":
      return action.entries
    default:
      return state
  }
}