import {reducerAllRepos} from '../reducers/ReducerAllRepos'
import {reducerFollowers} from '../reducers/ReducerFollowers'
import {reducerOrgs} from '../reducers/ReducerOrgs'
import {reducerRepos} from '../reducers/ReducerRepos'
import {reducerStarsGrowRepos} from '../reducers/ReducerStarsGrowRepos'
import {reducerUser} from '../reducers/ReducerUser'
import * as constants from '../Constants'

describe('>>>REDUCERS --- test redux reducers', () => {

    it('fetch user request', () => {
        let state = {user: ''};
        state = reducerUser(state, {type: constants.GET_USER_REQUEST});
        expect(state).toEqual(state);
    });
    it('fetch user RESPONCE', () => {
        let state = {};
        state = reducerUser(state, {type: constants.GET_USER_SUCCESS});
        expect(state).toEqual(state);
    });
    it('fetch user RESPONCE', () => {
        let state = {};
        state = reducerUser(undefined, {type: constants.GET_USER_SUCCESS});
        expect(state).toEqual(state);
    });


    it('fetch ORGS request', () => {
        let state = {data: ''};
        state = reducerOrgs(state, {type: constants.GET_ORGS_REQUEST});
        expect(state).toEqual(state);
    });
    it('fetch ORGS request', () => {
        let state = {};
        state = reducerOrgs(state, {type: constants.GET_ORGS_SUCCESS});
        expect(state).toEqual(state);
    });

    it('fetch ORGS request', () => {
        let state = {};
        state = reducerOrgs(undefined,{type: constants.GET_ORGS_SUCCESS});
        expect(state).toEqual(state);
    });


    it('fetch All repos request', () => {
        let state = {data: ''};
        state = reducerAllRepos(state, {type: constants.GET_ALL_REPOS_REQUEST});
        expect(state).toEqual(state);
    });
    it('fetch All repos request', () => {
        let state = {};
        state = reducerAllRepos(state, {type: constants.GET_ALL_REPOS_SUCCESS});
        expect(state).toEqual(state);
    });

    it('fetch All repos request', () => {
        let state = {};
        state = reducerAllRepos(undefined,{type: constants.GET_ALL_REPOS_SUCCESS});
        expect(state).toEqual(state);
    });

     it('fetch followers request', () => {
        let state = {data: ''};
        state = reducerFollowers(state, {type: constants.GET_FOLLOWERS_REQUEST});
        expect(state).toEqual(state);
    });
    it('fetch followers request', () => {
        let state = {};
        state = reducerFollowers(state, {type: constants.GET_FOLLOWERS_REQUEST});
        expect(state).toEqual(state);
    });

    it('fetch followers request', () => {
        let state = {};
        state = reducerFollowers(undefined,{type: constants.GET_FOLLOWERS_SUCCESS});
        expect(state).toEqual(state);
    });


    it('fetch StarsGrow request', () => {
        let state = {data: ''};
        state = reducerStarsGrowRepos(state, {type: constants.GET_STARS_REPOS_REQUEST});
        expect(state).toEqual(state);
    });
    it('fetch StarsGrow request', () => {
        let state = {};
        state = reducerStarsGrowRepos(state, {type: constants.GET_GROW_REPOS_SUCCESS});
        expect(state).toEqual(state);
    });

    it('fetch StarsGrow request', () => {
        let state = {};
        state = reducerStarsGrowRepos(undefined,{type: constants.GET_STARS_REPOS_SUCCESS});
        expect(state).toEqual(state);
    });


    it('fetch Repos request', () => {
        let state = {data: ''};
        state = reducerRepos(state, {type: constants.GET_STARS_REPOS_REQUEST});
        expect(state).toEqual(state);
    });
    it('fetch Repos request', () => {
        let state = {};
        state = reducerRepos(state, {type: constants.GET_GROW_REPOS_SUCCESS});
        expect(state).toEqual(state);
    });

    it('fetch Repos request', () => {
        let state = {};
        state = reducerRepos(undefined,{type: constants.GET_REPOS_SUCCESS});
        expect(state).toEqual(state);
    });
});