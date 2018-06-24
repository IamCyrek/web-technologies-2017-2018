import React from 'react';
import { bindActionCreators } from 'redux';
import { fetchStarsReposRequest } from '../actions/actions'
import { fetchGrowReposRequest } from '../actions/actions'

import { connect } from 'react-redux';

class StarsGrowReposComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = { tabIndex: 0 };
        if (props.request === 'TOP') {
            this.props.fetchStarsReposRequest();
        } else if (props.request === 'GROW') {
            this.props.fetchGrowReposRequest();
        }
    }




    render() {
        return (

            (this.props.repos.items !== undefined && this.props.repos.items.length !== 0) && <div className="REPS">

                <h2>Repositories</h2>
                {this.props.repos.items.map(function (item) {
                    return (<div className="orgs_adds">
                        <h2>{item.name}</h2>
                        <h3> {item.html_url}   <a>{item.language}</a></h3>
                    </div>)
                })}
            </div>

        )
    }
}

const getState = (state) => {
    console.log(state)
    return {
        repos: state.reducerStarsGrowRepos
    };
};

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchStarsReposRequest,
    fetchGrowReposRequest,
}, dispatch);


export default connect(getState, mapDispatchToProps)(StarsGrowReposComponent);