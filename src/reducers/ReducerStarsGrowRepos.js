import * as constatnts from '../Constants'

const initialStateStarsGrowRepos = {

};


export const reducerStarsGrowRepos = (state = initialStateStarsGrowRepos, action) => {
    switch (action.type) {
        case constatnts.GET_STARS_REPOS_SUCCESS: {
            return Object.assign({}, state.reducerStarsGrowRepos, action.Repos);
        }
        case constatnts.GET_GROW_REPOS_SUCCESS: {
            return Object.assign({}, state.reducerStarsGrowRepos, action.Repos);
        }

    }
    return state;

};

export default reducerStarsGrowRepos;