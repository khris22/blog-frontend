import React from 'react';
import { updateEntry, deleteEntry } from '../actions/entries'
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
    const { history, entry, deleteEntry } = this.props
    const entryId = entry ? entry.id : null
    return  <>
              <NewEntry editMode handleSubmit={this.handleSubmit} />
              <br/>
              <br/>
              <button style={{color: "red"}} 
              // function expression/reference -- do not invoke right away
              onClick={()=>deleteEntry(entryId, history)}>Delete this Entry</button>
            </>
            // editMode???
  }
};

export default connect(null, { updateEntry, setFormDataForEdit, resetEntryForm, deleteEntry })(EditEntryFormWrapper);