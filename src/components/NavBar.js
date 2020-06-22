import React from 'react';
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Logout from './Logout'
// import Login from './Login'

const NavBar = ({ currentUser, loggedIn }) => {
    return (
        <div>
            <span>
            
            {/* activeClassName -css for active links */}
            <NavLink exact activeClassName="active" to="/">BlogIt  ||</NavLink>{" "}
            <NavLink exact activeClassName="active" to="/entries"  >My Blog Entries  ||</NavLink>{" "}
            <NavLink exact activeClassName="active" to="/entries/new">New Trip ||</NavLink>{" "}
            { loggedIn ? <><p id="loggedin">Logged in as {currentUser.attributes.username}</p><Logout/></> : null}
            </span>
        </div>
    )
}

const mapStateToProps = ({ currentUser }) => {
    return {
      currentUser,
      loggedIn: !!currentUser
    }
  }

// export default NavBar
export default connect(mapStateToProps)(NavBar)