import * as constatnts from '../Constants'

const initialStateUser = {

};


const reducerUser = (state = initialStateUser, action) => {
    switch (action.type) {
        case constatnts.GET_USER_SUCCESS: {
            return Object.assign({}, state.reducerUser, action.user);
        }
        case 'RESPONCE_ERROR_USER':{
            return Object.assign({}, state.reducerUser, action.user);
        }
        default: {
            if (state !== undefined) {
                return state;
            } else {
                return initialStateUser;
            }
        }
    }
};

export default reducerUser;