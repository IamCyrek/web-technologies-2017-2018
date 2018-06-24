import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

function IconComponent(props) {
    return (

        <FontAwesomeIcon className="icon" icon={props.icon} />
    )
}

export default (IconComponent);