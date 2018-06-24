import React from 'react';
import {connect} from "react-redux";
import {UserNode} from "../components/github-components";

class UserInfo extends React.Component{
    render(){
        if (this.props.store.userInfo.isError){
            return (<div className='userInfo'>
                {this.props.store.userInfo.errName ? (
                    <h1>{this.props.store.userInfo.errName}</h1>) : (
                    null
                )}
            </div>);
        }
        else {
            return (
                <div className='userInfo'>
                    {this.props.store.userInfo.userLogin ? (
                        <UserNode defaultValue={this.props.store.userInfo}/>
                    ): null}
                </div>);
        }
    }
}

export default connect(
    state => ({store: state})
)(UserInfo);