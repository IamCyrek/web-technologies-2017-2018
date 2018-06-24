import * as constatnts from '../Constants'

const initialStateFollowers = {

};


export const reducerAllRepos = (state=initialStateFollowers, action) => {
    switch (action.type) {
        case constatnts.GET_ALL_REPOS_SUCCESS: {
            return Object.assign({}, state.reducerAllRepos, action.Repos);
        }
        default: {
            return initialStateFollowers
        }
    }
};

export default reducerAllRepos;