import React from 'react';
import { connect } from "react-redux";


function OrganizationsComponent(props) {
    var OrgsArr = [];

    for (const org in props.Orgs) {
        OrgsArr.push(props.Orgs[org])
    }

    return (
        (OrgsArr.length !== 0) && <div className="ORGS">

            <h2>Organizations</h2>

            {OrgsArr.map(function (item) {
                return (<div className="orgs_adds">
                    <h3>{item.login}</h3>
                    <img src={item.avatar_url} alt={item.avatar_url} />
                </div>)
            })}


        </div>
    );
}

const getState = (state) => {
    return {
        Orgs: state.reducerOrgs,
    };
};

export default connect(getState)(OrganizationsComponent);