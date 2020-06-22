import React from 'react';
import { updateEntry } from '../actions/entries'
import { setFormDataForEdit, resetEntryForm } from '../actions/entryForm'
import { connect } from 'react-redux'
import NewEntry from './NewEntry';

class EditEntryFormWrapper extends React.Component {
  componentDidMount(){
    this.props.entry && this.props.setFormDataForEdit(this.props.entry)
  }

  componentDidUpdate(prevProps) {
    this.props.entry && !prevProps.entry && this.props.setFormDataForEdit(this.props.entry)
  }

  componentWillUnmount() {
    this.props.resetEntryForm()
  }

  handleSubmit = (formData) => {
    const { updateEntry, entry, history } = this.props
    updateEntry({
      ...formData,
      entryId: entry.id
    }, history)
  }

  render() {
    const { history, entry } = this.props
    const entryId = entry ? entry.id : null
    return  <>
              <NewEntry editMode handleSubmit={this.handleSubmit} />
              <br/>
              
            </>
  }
};

export default connect(null, { updateEntry, setFormDataForEdit, resetEntryForm })(EditEntryFormWrapper);