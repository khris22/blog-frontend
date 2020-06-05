import React from 'react'
import { connect } from 'react-redux'
import { logout } from "../actions/currentUser"

const Logout = ({logout}) => {
    return (

    //     <form onSubmit={(event) => {
    //     event.preventDefault()
    //     logout()
    //     // history.push('/')
    //   }
    // }>
    <form onSubmit={logout}>
      <input type="submit" value="Log Out"/>
    </form>
    // Error using this form: Form submission canceled because the form is not connected
    )
}

export default connect(null, { logout })(Logout)
