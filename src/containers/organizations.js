import React, {Fragment} from 'react';
import {connect} from "react-redux";

class Organizations extends React.Component{
    render(){
        if (this.props.store.otherInfo.organizations.length !== 0){
            return (
                <Fragment>
                    {this.props.store.otherInfo.organizations.map((element, step) => {
                        return <li key={step}>{element}</li>
                    })}
                </Fragment>
            );
        }
        return <h2>No organizations</h2>;
    }
}

export default connect(
    state => ({store: state}),
)(Organizations);