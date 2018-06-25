import React, {Component, Fragment} from 'react';
import './styles.css';
import UserTabs from './containers/tabs';
import {Provider} from 'react-redux';
import {HashRouter} from 'react-router-dom';
import MainInfo from './components/index';
import Inputs from './containers/inputs';

import store from './store/store'

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Fragment>
                    <Inputs/>
                    <main className='mainContent'>
                        <MainInfo/>
                        <HashRouter>
                            <UserTabs/>
                        </HashRouter>
                    </main>
                </Fragment>
            </Provider>
        );
    }
}

export default App;
