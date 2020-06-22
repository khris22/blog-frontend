export const updateEntryForm = (name, value) => {
    const formData = { name, value }
    return {
      type: "UPDATE_NEW_ENTRY_FORM",
      formData
    }
  }
  
  export const resetEntryForm = () => {
    return {
      type: "RESET_NEW_ENTRY_FORM",
    }
  }

  export const setFormDataForEdit = entry => {
    const entryFormData = {
      title: entry.attributes.title,
      notes: entry.attributes.notes 
    }
    return {
      type: "SET_FORM_DATA_FOR_EDIT",
      entryFormData
    }
  }