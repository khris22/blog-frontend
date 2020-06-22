import React from 'react'
import {Link} from 'react-router-dom'


const EntryCard = ({entry}) => {
    return (
        entry ?
        <div>
        <h3>{entry.attributes.title}</h3>
        <p>{entry.attributes.notes}</p>
        <Link to={`/entries/${entry.id}/edit`}>Edit this Blog</Link>
        
        </div> :
        <p>NO ENTRY ON THIS CARD</p>
    )
}
// ternary if there is no entry / turn it to null
export default EntryCard
