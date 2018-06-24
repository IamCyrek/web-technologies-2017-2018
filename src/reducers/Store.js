import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { combineReducers } from 'redux';

import reducerUser from '../reducers/ReducerUser';
import reducerOrgs from '../reducers/ReducerOrgs'
import reduserRepos from '../reducers/ReducerRepos'
import reduserFollowers from '../reducers/ReducerFollowers'
import reducerAllRepos from '../reducers/ReducerAllRepos'
import reducerStarsGrowRepos from '../reducers/ReducerStarsGrowRepos'
import rootSaga from '../actions/saga';

const redusers = combineReducers({reducerUser,reducerOrgs,reduserFollowers,reduserRepos,reducerAllRepos,reducerStarsGrowRepos})

export default () => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(redusers, applyMiddleware(sagaMiddleware));

    sagaMiddleware.run(rootSaga);


    return store;
};