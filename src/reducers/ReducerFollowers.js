import * as constatnts from '../Constants'

const initialStateFollowers = {
    login: ''
};


export const reducerFollowers = (state=initialStateFollowers, action) => {
    switch (action.type) {
        case constatnts.GET_FOLLOWERS_SUCCESS: {
            return Object.assign({}, state.reducerFollowers, action.Followers);
        }
        default: {
            return state;
        }
    }
};

export default reducerFollowers;