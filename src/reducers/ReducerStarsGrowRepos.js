import * as constatnts from '../Constants'

const initialStateStarsGrowRepos = {

};


const reducerStarsGrowRepos = (state, action) => {
    console.log(action.type)
    switch (action.type) {
        case constatnts.GET_STARS_REPOS_SUCCESS: {
            return Object.assign({}, state.reducerStarsGrowRepos, action.Repos);
        }
        case constatnts.GET_GROW_REPOS_SUCCESS: {
            return Object.assign({}, state.reducerStarsGrowRepos, action.Repos);
        }
        default: {
            if (state !== undefined) {
                return state;
            } else {
                return initialStateStarsGrowRepos;
            }
        }
    }
};

export default reducerStarsGrowRepos;