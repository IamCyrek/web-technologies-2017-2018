import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import UserTabs from './containers/tabs';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {HashRouter} from 'react-router-dom';
import MainInfo from './components/index';
import Inputs from './containers/inputs';

const store = createStore(reducers, applyMiddleware(thunk));


export default store;


ReactDOM.render(
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
    </Provider>,
    document.getElementById('root')
);