const initialState = {
    title: "",
    notes: ""
  }
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case "UPDATE_NEW_ENTRY_FORM":
        const returnVal = {
            ...state,
            [action.formData.name]: action.formData.value
          }
          return returnVal
      case "RESET_NEW_ENTRY_FORM":
        return initialState
      case "SET_FORM_DATA_FOR_EDIT":
        return action.entryFormData
      default:
        return state
    }
  }
