import React from 'react';
import { connect } from "react-redux";


function BioComponent(props) {
    return(
        <div className="Bio">
            <h4>{props.bio}</h4>
        </div>
    );
}

const getState = (state) => {
    return{
        bio: state.reducerUser.bio,
    };
};

export default connect(getState)(BioComponent);