import React from 'react';
import { connect } from "react-redux";


function AllReposFind(props) {
    var reposArr = [];

    if (props.repos.items !== undefined) {
        reposArr = props.repos.items
        return (
            (reposArr.length!==0) && <div>
                <h2>Finding Repositories </h2>
                {reposArr.map(function (item) {
                    return (<div className="orgs_adds">
                         <h2>{item.name}</h2>  
                     <h3> {item.html_url}   <a>{item.language}</a></h3>
                    </div>)
                })}
            </div>
        )
    }else {
        return(
            <div>
            </div>
        )
    }

}

const getState = (state) => {
    return {
        repos: state.reducerAllRepos,
    };
};

export default connect(getState)(AllReposFind);