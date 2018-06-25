const initialState = {
    followers: [],
    following: [],
    repos: [],
    organizations: []
};

export default function getOtherInfo(state = initialState, action) {
    switch (action.type){
        case 'FETCH_REPOS_SUCCESS':{
            return Object.assign({}, state, {
                repos: action.repos
            })
        }
        case 'FETCH_FOLLOWERS_SUCCESS':{
            return Object.assign({}, state, {
                followers: action.followers
            })
        }
        case 'FETCH_FOLLOWING_SUCCESS':{
            return Object.assign({}, state, {
                following: action.following
            })
        }
        case 'FETCH_ORGANIZATIONS_SUCCESS':{
            return Object.assign({}, state, {
                organizations: action.organizations
            })
        }
        default:{
            return state;
        }
    }
}
