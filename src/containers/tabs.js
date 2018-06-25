import {changeTab, setContent} from "../actions/tabs";
import {connect} from "react-redux";
import React from "react";
import {TabsComponents} from '../components/tabs-components'
import {Link, Switch, Route, withRouter} from 'react-router-dom';
import Followers from './followers';
import Following from './following';
import Repos from './repos';
import Organizations from './organizations';
import {getFollowers, getFollowing, getOrganizations, getRepos} from "../actions/other_info";

function RouteLinks(props) {
    return (
        <ul className='ulTabButtons'>
            <li className='tabButton'>
                <Link name='1' onClick={props.changeTab} className='radioTabButton' to='/'>Main</Link>
            </li>
            <li className='tabButton'>
                <Link name='2' onClick={props.changeTab} className='radioTabButton' to='/'>Education</Link>
            </li>
            <li className='tabButton'>
                <Link name='3' onClick={props.changeTab} className='radioTabButton' to='/'>Contacts</Link>
            </li>
            <li className='tabButton'>
                <Link className='radioTabButton' to='/followers' onClick={props.getFollowers}>Followers</Link>
                <h1 className='radioTabNumber'>{props.numOfFollowers}</h1>
            </li>
            <li className='tabButton'>
                <Link className='radioTabButton' to='/following' onClick={props.getFollowing}>Following</Link>
                <h1 className='radioTabNumber'>{props.numOfFollowing}</h1>
            </li>
            <li className='tabButton'>
                <Link className='radioTabButton' to='/repos' onClick={props.getRepos}>Repositories</Link>
                <h1 className='radioTabNumber'>{props.numOfPublicRepos}</h1>
            </li>
            <li className='tabButton'>
                <Link className='radioTabButton' to='/organizations' onClick={props.getOrganizations}>Organizations</Link>
            </li>
        </ul>
    );
}

class UserTabs extends React.Component{
    render(){
        return (
            <div className='tab_container'>
                <nav>
                    <RouteLinks changeTab={this.props.changeTab}
                                getFollowers={this.props.getFollowers}
                                numOfFollowers={this.props.store.userInfo.numberOfFollowers}
                                getFollowing={this.props.getFollowing}
                                numOfFollowing={this.props.store.userInfo.numberOfFollowing}
                                getRepos={this.props.getRepos}
                                numOfPublicRepos={this.props.store.userInfo.numberOfPublicRepos}
                                getOrganizations={this.props.getOrganizations}
                                />
                </nav>
                <Switch>
                    <Route exact path='/' render={() => <TabsComponents text={this.props.store.tabs}
                                                                        currentTab={this.props.store.tabs.currentTab}
                                                                        onChange={this.props.setContent}/>}/>
                    <Route path='/followers' component={Followers}/>
                    <Route path='/following' component={Following}/>
                    <Route path='/repos' component={Repos}/>
                    <Route path='/organizations' component={Organizations}/>
                </Switch>
            </div>
        );
    }
}

export default withRouter(connect(
    state => ({store: state}),
    dispatch => ({
        changeTab: (e) => dispatch(changeTab(e)),
        setContent: (e) =>dispatch(setContent(e)),
        getRepos: () => {dispatch(getRepos())},
        getFollowers: () => {dispatch(getFollowers())},
        getFollowing: () => {dispatch(getFollowing())},
        getOrganizations: () => {dispatch(getOrganizations())}
    })
)(UserTabs));