export default (state = null, action) => {
    switch (action.type) {
        case "SET_CURRENT_USER":
            return null
            // return action.user
            
        default:
            return state
    }
}
