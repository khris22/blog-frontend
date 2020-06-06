import React from 'react';
// import logo from './logo.svg';
// import Login from './components/Login'
// import Logout from './components/Logout'
import './App.css';
import { connect } from 'react-redux'
import { getCurrentUser } from "./actions/currentUser";
import NavBar from './components/NavBar'
import MainContainer from './components/MainContainer';

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render(){
  return (
    // this.props.currentUser ? <Logout/> : <Login/>
    <div>
    <NavBar/>
    <MainContainer/>
    </div>
  );
}
}

// const mapStateToProps = state => {
//   return ({
//     loggedIn: !!state.currentUser
//     // trips: state.myTrips
//   })
// }

const mapStateToProps = ({currentUser}) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps, { getCurrentUser })(App);

// export default App;
