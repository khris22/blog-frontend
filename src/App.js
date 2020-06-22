import React from 'react';
// import logo from './logo.svg';
// import Login from './components/Login'
// import Logout from './components/Logout'
import './App.css';
import { connect } from 'react-redux'
import { getCurrentUser } from "./actions/currentUser";
import NavBar from './components/NavBar'
// import MainContainer from './components/MainContainer';
import { Route, Switch, withRouter } from 'react-router-dom'
import Login from './components/Login'
import Logout from './components/Logout';
import Signup from './components/Signup';
import Home from './components/Home'
import Entries from './components/Entries'
import NewEntry from './components/NewEntry'

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render(){

  const { loggedIn } = this.props

  return (
    // this.props.currentUser ? <Logout/> : <Login/>
    
    
    <div>
    {/* { loggedIn ? <NavBar entries={this.props.entries}/> : <Home/> } */}

    {/* <Logout/> */}
    { loggedIn ? <NavBar/> : <Home/> }
    <Switch>
    <Route exact path='/signup' component={Signup}/>
    {/* <Route exact path='/signup' render={({history})=><Signup history={history}/>}/> */}

    <Route exact path='/login' component={Login}/>
    <Route exact path='/entries' component={Entries}/>
    <Route exact path='/entries/new' component={NewEntry}/>
    <Route exact path='/logout' component={Logout}/>

    {/* <Route exact path='/' render={(props) => loggedIn ? <Entries {...props}/> : <Home {...props}/>} /> */}
    {/* <NavBar/> */}
    {/* <MainContainer/> */}
    </Switch>
    </div>
  );
}
}

const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUser,
    // Boolean state!! in JS

    entries: state.entries
  })
}

// const mapStateToProps = ({currentUser}) => {
//   return {
//     currentUser
//   }
// }

export default withRouter(connect(mapStateToProps, { getCurrentUser })(App));

// export default App;
