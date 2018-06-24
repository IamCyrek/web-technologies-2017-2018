import { call, put, all, takeLatest } from 'redux-saga/effects';
import * as actions from './actions'
import * as request from '../requsets/Requests'
import * as constants from '../Constants'


export function* fetchUser(action) {
    const user = yield call(request.sendRequest, action.username);
    yield put(actions.fetchUserSuccess(user));
}

export  function* fetchOrgs(action){
    const orgs = yield call(request.sendRequestOrgs,action.username)
    yield put(actions.fetchOrgsSuccess(orgs));
}


export  function* fetchRepos(action){
    const repos = yield call(request.sendRequestRepos,action.username)
    yield put(actions.fetchReposSuccess(repos));
}

export  function* fetchFollowers(action){
    const followers = yield call(request.sendRequestFollowers,action.username)
    yield put(actions.fetchFollowersSuccess(followers));
}

export  function* fetchAllRepos(action){  
    const repos = yield call(request.sendRequestAllRepos,action.username)
    yield put(actions.fetchAllReposSuccess(repos));
}

export  function* fetchStarsRepos(){  
    const repos = yield call(request.sendRequestStarsRep)
    yield put(actions.fetchStarsReposSucces(repos));
}

export  function* fetchGrowRepos(){  
    const repos = yield call(request.sendRequestGrowRep)
    yield put(actions.fetchGrowReposSuccess(repos));
}

export function* watchFetchUser() {
    yield takeLatest(constants.GET_USER_REQUEST, fetchOrgs);
}

export function* watchFetchOrgs() {
    yield takeLatest(constants.GET_USER_REQUEST, fetchUser);
}

export function* watchFetchRepos() {
    yield takeLatest(constants.GET_REPOS_REQUEST, fetchRepos);
}

export function* watchFetchFollowers() {
    yield takeLatest(constants.GET_FOLLOWERS_REQUEST, fetchFollowers);
}

export function* watchFetchAllRepos() {
    yield takeLatest(constants.GET_ALL_REPOS_REQUEST, fetchAllRepos);
}

export function* watchFetchStarsRepos() {
    yield takeLatest(constants.GET_STARS_REPOS_REQUEST, fetchStarsRepos);
}

export function* watchFetchGrowRepos() {
    yield takeLatest(constants.GET_GROW_REPOS_REQUEST, fetchGrowRepos);
}

export default function* rootSaga() {
    yield all([
        watchFetchUser(),
        watchFetchOrgs(),
        watchFetchFollowers(),
        watchFetchRepos(),
        watchFetchAllRepos(),
        watchFetchGrowRepos(),
        watchFetchStarsRepos(),
    ])
}