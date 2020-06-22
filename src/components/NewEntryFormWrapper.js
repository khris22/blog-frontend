import React from 'react'
import NewEntry from './NewEntry'
import { createEntry } from '../actions/entries'
import { connect } from 'react-redux'

const NewEntryFormWrapper = ({ history, createEntry }) => {
    const handleSubmit = (formData, userId) => {
        createEntry({
          ...formData,
          userId
        }, history)
      }
      return  <NewEntry history={history} handleSubmit={handleSubmit} />
}

export default connect(null, { createEntry })(NewEntryFormWrapper)
