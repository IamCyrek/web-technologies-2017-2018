import * as constatnts from '../Constants'

const initialStateRepos = {
 login :''
};


export const reducerRepos = (state=initialStateRepos , action) => {
    switch (action.type) {
        case constatnts.GET_REPOS_SUCCESS: {
            return Object.assign({}, state.reducerRepos, action.Repos);
        }
        default: {
            return initialStateRepos;      
        }
    }
};

export default reducerRepos;