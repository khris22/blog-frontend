import React from 'react'
import { connect } from 'react-redux'
import { updateLoginForm } from "../actions/loginForm"
import { login } from "../actions/currentUser"

// same thing > personal preference
// (props) > props.username 
// destructure ({})
const Login = ({ loginFormData, updateLoginForm, login, history }) => {

    const handleInputChange = event => {
        const { name, value } = event.target
        const updatedFormInfo = {
          ...loginFormData,
          [name]: value
        }
        updateLoginForm(updatedFormInfo)
      }

    const handleSubmit = event => {
        event.preventDefault()
        login(loginFormData)
      }

    return (
       <form onSubmit={handleSubmit}>
            <input placeholder="username" value={loginFormData.username} name="username" type="text" onChange={handleInputChange} required/>
            <input placeholder="password" value={loginFormData.password} name="password" type="text" onChange={handleInputChange} required />
            <input type="submit" value="Log In"/>
       </form>
    )
}

// read only, gives us access to the chunk of state to the store and use them as props
const mapStateToProps = state => {
    return {
      loginFormData: state.loginForm
    }
  }

// export default Login
export default connect(mapStateToProps, { updateLoginForm, login} )(Login)
