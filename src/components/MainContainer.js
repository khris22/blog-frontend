import React from 'react';
import Entries from './Entries'

const MainContainer = () => {
    return (
        <div className="MainContainer">
        <p>HOMEPAGE when only when logged in!!!</p>
        <Entries />
            {/* main homepage after logging in */}
        </div>
    )
}

export default MainContainer
