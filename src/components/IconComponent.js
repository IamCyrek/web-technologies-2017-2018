import React from 'react';
import { connect } from "react-redux";
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

function IconComponent(props) {
    return (

        <FontAwesomeIcon className="icon" icon={props.icon} />
    )
}



export default connect(null)(IconComponent);