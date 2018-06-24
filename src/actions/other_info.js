import GitHubAPI from '../services/githubAPI';
import store from '../index';

export const getRepos = () => (dispatch) => {
    if (store.getState().userInfo.reposUrl){
        GitHubAPI.getOtherInfo(store.getState().userInfo.reposUrl).then(
            (res) => {
                const result = res.map((element) => {
                    return element.name;
                });
                dispatch({
                    type: 'FETCH_REPOS_SUCCESS',
                    repos: result
                })
            }
        )
    }
    return null;
};

export const getFollowers = () => (dispatch) => {
    if (store.getState().userInfo.followersUrl){
        GitHubAPI.getOtherInfo(store.getState().userInfo.followersUrl).then(
            (res) => {
                const result = res.map((element) => {
                    return element.login;
                });
                dispatch({
                    type: 'FETCH_FOLLOWERS_SUCCESS',
                    followers: result
                })
            }
        )
    }
    return null;
};

export const getOrganizations = () => (dispatch) => {
    if (store.getState().userInfo.organizationsUrl){
        GitHubAPI.getOtherInfo(store.getState().userInfo.organizationsUrl).then(
            (res) => {
                const result = res.map((element) => {
                    return element.login;
                });
                dispatch({
                    type: 'FETCH_ORGANIZATIONS_SUCCESS',
                    organizations: result
                })
            }
        )
    }
    return null;
};