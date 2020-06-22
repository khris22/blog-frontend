import React from 'react'
// import {Link} from 'react-router-dom'


const EntryCard = ({entry}) => {
    return (
        entry ?
        <div>
        <h3>{entry.attributes.title}</h3>
        <p>{entry.attributes.notes}</p>
        </div> :
        <p>NO ENTRY ON THIS CARD</p>
    )
}

export default EntryCard
