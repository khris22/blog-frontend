import React from 'react';
import { updateEntry } from '../actions/entries'
import { setFormDataForEdit, resetEntryForm } from '../actions/entryForm'
import { connect } from 'react-redux'
import NewEntry from './NewEntry';

class EditEntryFormWrapper extends React.Component {
    // before it mounts during initial render
  componentDidMount(){
    this.props.entry && this.props.setFormDataForEdit(this.props.entry)
  }

    // for updating so the form will be filled when url gets typed manually
  componentDidUpdate(prevProps) {
    this.props.entry && !prevProps.entry && this.props.setFormDataForEdit(this.props.entry)
  }

    // leaving a component
    // for clearing forms  
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
            // editMode???
  }
};

export default connect(null, { updateEntry, setFormDataForEdit, resetEntryForm })(EditEntryFormWrapper);