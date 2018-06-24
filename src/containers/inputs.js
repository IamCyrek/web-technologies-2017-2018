import React from "react";
import {fetchSuccess} from "../actions/user";
import {connect} from "react-redux";
import logo from '../logo.png';

class Inputs extends React.Component {
    keyEnter = (e) =>{
        if (e.keyCode === 13)
            this.props.fetchSuccess();
    };
    render() {
        return (
            <div className='inputs_header'>
                <img src={logo} alt='logo'/>
                <input type='text' id='textInput' onKeyUp={this.keyEnter}/>
                <button onClick={this.props.fetchSuccess}>Find!</button>
            </div>
        );
    }
}

export default connect(
    state => ({store: state}),
    dispatch => ({
        fetchSuccess: () => dispatch(fetchSuccess())
    })
)(Inputs);