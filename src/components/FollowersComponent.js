import React from 'react';
import { connect } from "react-redux";
import { fetchFollowersRequest } from '../actions/actions'
import { bindActionCreators } from 'redux';


function FollowersComponent(props) {

    if (props.login !== undefined && props.followers !== undefined && props.followers.login === '') {
        props.fetchFollowersRequest(props.login)
    }

    var followersArr = [];
    for (const follower in props.followers) {
        followersArr.push(props.followers[follower])
    }


    return (
        (props.followers !== undefined && props.followers.login !== '') && <div className="REPS">
            <h2>Followers</h2>
            {followersArr.map(function (item) {
                return (<div>
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