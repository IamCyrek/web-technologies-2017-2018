import React, {Fragment} from 'react';
import {connect} from "react-redux";

class Following extends React.Component{
    render(){
        if (this.props.store.otherInfo.following.length !== 0){
            return (
                <Fragment>
                    {this.props.store.otherInfo.following.map((element, step) => {
                        return <li key={step}>{element}</li>
                    })}
                </Fragment>
            );
        }
        return <h2>No repositories</h2>;
    }
}

export default connect(
    state => ({store: state}),
)(Following);
