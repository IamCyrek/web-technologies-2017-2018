import * as constatnts from '../Constants'

const initialStateFollowers = {

};


const reducerAllRepos = (state, action) => {
    switch (action.type) {
        case constatnts.GET_ALL_REPOS_SUCCESS: {
            return Object.assign({}, state.reducerAllRepos, action.Repos);
        }
        default: {
            if (state !== undefined) {
                return state;
            } else {
                return initialStateFollowers;
            }
        }
    }
};

export default reducerAllRepos;