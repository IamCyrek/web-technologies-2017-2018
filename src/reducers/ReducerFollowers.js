import * as constatnts from '../Constants'

const initialStateFollowers = {
    login: ''
};


const reducerFollowers = (state, action) => {
    switch (action.type) {
        case constatnts.GET_FOLLOWERS_SUCCESS: {
            return Object.assign({}, state.reducerFollowers, action.Followers);
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

export default reducerFollowers;