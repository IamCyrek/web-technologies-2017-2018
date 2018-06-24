import * as constatnts from '../Constants'

const initialStateUser = {
    
};


export const  reducerUser = (state = initialStateUser, action) => {
    switch (action.type) {
        case constatnts.GET_USER_SUCCESS: {
            return Object.assign({}, state.reducerUser, action.user);
        }
        default: {
            return state
        }
    }
};

export default reducerUser;