import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'


const Entries = (props) => {
    return (
        props.entries.map(e => (<p key={e.id}>
            <Link to={`/entries/${e.id}`}>{e.attributes.title}</Link>
        </p>))
    )
}

const mapStateToProps = (state) => {
    return {
        entries: state.entries
    }
}

export default connect(mapStateToProps)(Entries)
