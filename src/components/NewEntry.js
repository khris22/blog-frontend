import React from 'react';
import { connect } from 'react-redux'
import { updateEntryForm } from "../actions/entryForm"


const NewEntry = ({ formData, updateEntryForm, userId, entry}) => {

    const { title, notes } = formData

    const handleChange = event => {
        const { name, value } = event.target
        // const updatedFormInfo = {
        //   ...formData,
        //   [name]: value
        // }
        // updateEntryForm(updatedFormInfo)
        updateEntryForm(name, value)
      }

    const handleSubmit = event => {
        event.preventDefault()
        
      }

    return (
        <form onSubmit={handleSubmit}>
            <input placeholder="title" name="title" onChange={handleChange} value={title}/><br/><br/>
            <input placeholder="notes" name="notes" onChange={handleChange} value={notes}/><br/><br/>
            <input type="submit" value="ADD ENTRY"/>

        </form>
    )
}

// const mapStateToProps = (state) => {
//     return {
//         entryFormData: state.entryForm
//     }
// }

const mapStateToProps = state => {
    // const userId = state.currentUser ? state.currentUser.id : ""
    return {
      formData: state.entryForm,
    //   userId
    }
  }


export default connect(mapStateToProps, { updateEntryForm })(NewEntry)


// t.string "title"
// t.text "notes"