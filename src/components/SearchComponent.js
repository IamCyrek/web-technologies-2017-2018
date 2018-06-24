import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUserRequest } from '../actions/actions'
import { fetchOrgsRequest } from '../actions/actions'
import { fetchAllReposRequest } from '../actions/actions'


class SearchComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            text: '',
            textRep: '',
        };
        this.textChange = this.textChange.bind(this);
        this.search = this.search.bind(this);
        this.textChangeRepository = this.textChangeRepository.bind(this);
        // this.enterPressRepository = this.enterPressRepository.bind(this);
        // this.enterPress = this.enterPress.bind(this);

        this.searchRepository = this.searchRepository.bind(this);
    }

    // enterPress = (event) => {
    //     if (event.keyCode=== 13) {
    //         this.search();
    //     }
    // }

    // enterPressRepository = (event) => {
    //     if (event.keyCode === 13) {
    //         this.searchRepository();
    //     }
    // }

    textChange(e) {
        this.setState({ text: e.target.value });
    }

    textChangeRepository(e) {
        this.setState({ textRep: e.target.value });
    }

    search() {
        this.props.fetchUserRequest(this.state.text);
        this.props.fetchOrgsRequest(this.state.text);
    }

    searchRepository() {
        this.props.fetchAllReposRequest(this.state.textRep)
    }

    render() {
        return (
            <div>
                <div className='Search'>
                    <input id='inputText' type='text' onChange={this.textChange} placeholder="Username" onKeyDown={this.enterPress} />
                    <button  className='button'onClick={this.search}>Search User</button>
                </div>
                <div className='Search'>
                    <input id='inputText' type='text' onChange={this.textChangeRepository} placeholder="Repository Name" onKeyDown={this.enterPressRepository} />
                    <button className='button' onClick={this.searchRepository}>Search Repository</button>
                </div>
            </div>
        );
    }
}
const mapDispatchToProps = dispatch => bindActionCreators({
    fetchUserRequest,
    fetchOrgsRequest,
    fetchAllReposRequest,
}, dispatch);


export default connect(null, mapDispatchToProps)(SearchComponent);