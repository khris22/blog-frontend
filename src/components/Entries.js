import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'


const Entries = (props) => {
    const entryCard = props.entries.length > 0 ?
        props.entries.map(e => (<p key={e.id}>
            <Link to={`/entries/${e.id}`}>{e.attributes.title}</Link>
        </p>)) : null
    return entryCard
}


// mapStateToProps(Redux) - to access State
// pieces of state to make available as props
const mapStateToProps = (state) => {
    return {
        entries: state.entries
    }
}

export default connect(mapStateToProps)(Entries)
