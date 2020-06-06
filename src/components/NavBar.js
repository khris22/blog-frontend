import React from 'react';
import { connect } from 'react-redux'
// import { NavLink } from 'react-router-dom'
import Logout from './Logout'
import Login from './Login'

const NavBar = ({ currentUser }) => {
    return (
        <div>
            {currentUser ? <h5>Welcome, {currentUser.attributes.username}</h5> : ""}
            {currentUser ? <Logout/> : <Login/>}
        </div>
    )
}

const mapStateToProps = ({ currentUser }) => {
    return {
      currentUser,
    //   loggedIn: !!currentUser
    }
  }

// export default NavBar
export default connect(mapStateToProps)(NavBar)