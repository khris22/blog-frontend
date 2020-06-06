export const updateLoginForm = (formData) => {
    return {
        type: "UPDATE_LOGIN_FORM",
        formData
      }
  }

// clear the login form after a logout
export const resetLoginForm = () => {
    return {
      type: "RESET_LOGIN_FORM"
    }
  }