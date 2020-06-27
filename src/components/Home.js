import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Button, Image } from 'react-bootstrap';
import img1 from '../images/img1.jpg'


const Home = () => {
    return (
        <Container>
        <center>
            <h2>WELCOME!!!</h2>
            <span>
            <Button variant="light"><Link to="/signup">Sign Up</Link></Button> or <Button variant="light"><Link to="/login">Log In</Link></Button>
            </span>
            {/* must change opacity and should only be on the Home page */}
            <Image src={img1} alt="Photo by Patrick Fore on Unsplash" fluid />
        </center>
        </Container>
    )
}

export default Home
