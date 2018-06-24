import React from 'react';
import { connect } from "react-redux";
import IconComponent from './IconComponent';
import emailIc from '@fortawesome/fontawesome-free-solid/faEnvelope'
import socialIc from '@fortawesome/fontawesome-free-solid/faUser'
import locationIc from '@fortawesome/fontawesome-free-solid/faMapMarker'
import companyIc from '@fortawesome/fontawesome-free-solid/faBuilding'



function AdditionalUserInfoComponent(props) {
    const email = props.email;
    const blog = props.blog;
    const location = props.location;
    const company = props.company;
    return (
        <div className="AdditionalUserInfo">
            {
                blog != null && blog!=="" && <a><IconComponent className="icon" icon={socialIc} />{props.blog}</a>
            }
            {
                email != null && email!=="" && <a><IconComponent className="icon" icon={emailIc} />{props.email}</a>
            }
            {
                location != null && location!=="" && <h5><IconComponent className="icon" icon={locationIc} />{props.location}</h5>
            }
            {
                company != null && company!=="" &&<h5><IconComponent className="icon" icon={companyIc} />{props.company}</h5>
            }

        </div>
    );
}

const getState = (state) => {
    return {
        email: state.reducerUser.email,
        location: state.reducerUser.location,
        blog: state.reducerUser.blog,
        company: state.reducerUser.company
    };
};

export default connect(getState)(AdditionalUserInfoComponent);