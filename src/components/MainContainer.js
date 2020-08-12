import React from 'react';
import Entries from './Entries'
import { Container } from 'react-bootstrap';


const MainContainer = () => {
    return (
        <Container>
        <div className="MainContainer">
            <p>HOMEPAGE when only when logged in!!!</p>
            <Entries />
            {/* main homepage after logging in */}
        </div>
        </Container>
    )
}

export default MainContainer
