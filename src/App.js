import React from 'react';
// import logo from './logo.svg';
import Login from './components/Login'
import './App.css';
import { connect } from 'react-redux'
import { getCurrentUser } from "./actions/currrentUser"

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render(){
  return (
    <Login/>
  );
}
}

const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUser
    // trips: state.myTrips
  })
}

export default connect(mapStateToProps, { getCurrentUser })(App);

// export default App;
