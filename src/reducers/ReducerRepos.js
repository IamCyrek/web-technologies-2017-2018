import * as constatnts from '../Constants'

const initialStateRepos = {
 login :''
};


const reducerRepos = (state , action) => {
    switch (action.type) {
        case constatnts.GET_REPOS_SUCCESS: {
            return Object.assign({}, state.reducerRepos, action.Repos);
        }
        default: {
            if (state !== undefined){
                return state;
            }else{
                return initialStateRepos;
            }
        }
    }
};

export default reducerRepos;