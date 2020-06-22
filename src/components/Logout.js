import React from 'react'
import { connect } from 'react-redux'
import { logout } from "../actions/currentUser"
import { withRouter } from 'react-router-dom'


const Logout = ({logout, history}) => {
    return (

    //     <form onSubmit={(event) => {
    //     event.preventDefault()
    //     logout()
    //     // history.push('/')
    //   }
    // }>
    <form onSubmit={(event) => {
      event.preventDefault()
      logout()
      history.push('/')
      // history.push can be done in action creator
    }
  }>
      <input type="submit" value="Log Out"/>
    </form>
    // Error using this form: Form submission canceled because the form is not connected
    )
}

// export default connect(null, { logout })(Logout)
export default withRouter(connect(null, { logout } )(Logout))
