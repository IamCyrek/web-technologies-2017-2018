import React from 'react';
import { connect } from "react-redux";
import { fetchFollowersRequest } from '../actions/actions'
import { bindActionCreators } from 'redux';


function FollowersComponent(props) {


    if (props.followers.login === '' && props.login!==undefined) {
        props.fetchFollowersRequest(props.login)
    }

    var followersArr = [];

    for (const follower in props.followers) {
        if (props.followers.hasOwnProperty(follower)) {
            followersArr.push(props.followers[follower])
        }
    }

    return (
        (followersArr.length !== 0) && <div className="REPS">


            <h2>Organizations</h2>

            {followersArr.map(function (item) {
                return (<div className="orgs_adds">
                    <h3>{item.login}</h3>
                    <img src={item.avatar_url} alt={item.avatar_url} />
                </div>)
            })}


        </div>
    );
}

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchFollowersRequest,
}, dispatch);


const getState = (state) => {
    
    return {
        followers: state.reduserFollowers,
        login: state.reducerUser.login,
    };
};

export default connect(getState, mapDispatchToProps)(FollowersComponent);