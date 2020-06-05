export default (state = null, action) => {
    switch (action.type) {
        case "SET_CURRENT_USER":
            // return null
            return action.user
        case "CLEAR_CURRENT_USER":
            return null
            // null is a falsy value
        default:
            return state
    }
}
