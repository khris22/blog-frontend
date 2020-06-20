import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
    return (
        <div>
            <h2>WELCOME!!!</h2>
            <span>
            <Link to="/signup">Sign Up</Link> or <Link to="/login">Log In</Link>
            </span>
        </div>
    )
}

export default Home
