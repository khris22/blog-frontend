// should be renamed to EntryForm!!

import React from 'react';
import { connect } from 'react-redux'
import { updateEntryForm } from '../actions/entryForm'
// import { createEntry } from '../actions/entries'


// const NewEntry = ({ formData, updateEntryForm, createEntry, userId, entry, history, handleSubmit}) => {
const NewEntry = ({ formData, updateEntryForm, userId, entry, history, handleSubmit}) => {


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

      // handleSubmit is now a prop passed down from wrapper
    // const handleSubmit = event => {
    //     event.preventDefault()
    //     // formData will be EntryData in the action creator to be dispatched
    //     createEntry(formData, history)

        // manually put the userId
        // createEntry({
        //     ...formData,
        //     userId
        // }, history)
      // }

    return (
        // <form onSubmit={handleSubmit}>
        <form onSubmit={event => {
          event.preventDefault()
          handleSubmit(formData)
        }}>
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
    // ternary for grabbing currentUser id during init
    const userId = state.currentUser ? state.currentUser.id : ""
    return {
      formData: state.entryForm,
      userId
    }
  }


export default connect(mapStateToProps, { updateEntryForm })(NewEntry)


// t.string "title"
// t.text "notes"