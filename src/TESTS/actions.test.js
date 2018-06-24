import configureMockStore from 'redux-mock-store';
import * as constants from '../Constants'
import * as action from '../actions/actions'
import thunk from 'redux-thunk';

const fetchMock = require('fetch-mock');
const mockStore = configureMockStore([thunk]);


describe('>>>ACTIONS --- Test redux actions', () => {
    it('fetch user test', () => {
        const fetchRequest = action.fetchUserSuccess("logoped583st");
        expect(fetchRequest).toEqual({ type: constants.GET_USER_SUCCESS, user:"logoped583st"});
    });

    it('fetchfollow test', () => {
        const fetchRequest = action.fetchFollowersSuccess("logoped583st");
        expect(fetchRequest).toEqual({ type: constants.GET_FOLLOWERS_SUCCESS, Followers:"logoped583st"});
    });

    it('fetchRepos test', () => {
        const fetchRequest = action.fetchReposSuccess("logoped583st");
        expect(fetchRequest).toEqual({ type: constants.GET_REPOS_SUCCESS, Repos:"logoped583st"});
    });

    it('fetchAllRepos test', () => {
        const fetchRequest = action.fetchAllReposSuccess("logoped583st");
        expect(fetchRequest).toEqual({ type: constants.GET_ALL_REPOS_SUCCESS, Repos:"logoped583st"});
    });

    it('fetchStarsRepos test', () => {
        const fetchRequest = action.fetchStarsReposSucces("logoped583st");
        expect(fetchRequest).toEqual({ type: constants.GET_STARS_REPOS_SUCCESS, Repos:"logoped583st"});
    });

    it('fetchGrowRepos test', () => {
        const fetchRequest = action.fetchGrowReposSuccess("logoped583st");
        expect(fetchRequest).toEqual({ type: constants.GET_GROW_REPOS_SUCCESS, Repos:"logoped583st"});
    });

    it('fetch user request', () => {
        const fetchRequest = action.fetchUserRequest("logoped583st");
        expect(fetchRequest).toEqual({ type: constants.GET_USER_REQUEST,username:"logoped583st"});
    });

    it('fetch repos request', () => {
        const fetchRequest = action.fetchReposRequest("logoped583st");
        expect(fetchRequest).toEqual({ type: constants.GET_REPOS_REQUEST,username:"logoped583st"});
    });

    it('fetch allrepos request', () => {
        const fetchRequest = action.fetchAllReposRequest("logoped583st");
        expect(fetchRequest).toEqual({ type: constants.GET_ALL_REPOS_REQUEST,username:"logoped583st"});
    });

    it('fetch followers request', () => {
        const fetchRequest = action.fetchFollowersRequest("logoped583st");
        expect(fetchRequest).toEqual({ type: constants.GET_FOLLOWERS_REQUEST,username:"logoped583st"});
    });

    it('fetch stars request', () => {
        const fetchRequest = action.fetchStarsReposRequest();
        expect(fetchRequest).toEqual({ type: constants.GET_STARS_REPOS_REQUEST});
    });

    it('fetch grow request', () => {
        const fetchRequest = action.fetchGrowReposRequest();
        expect(fetchRequest).toEqual({ type: constants.GET_GROW_REPOS_REQUEST});
    });
})