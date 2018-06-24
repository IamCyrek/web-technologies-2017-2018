import * as constants from '../Constants'

const initialStateOrgs = {

};


export const reducerOrgs = (state=initialStateOrgs , action) => {

    switch (action.type) {
        case constants.GET_ORGS_SUCCESS: {
            return Object.assign({}, state.reducerOrgs, action.Orgs);
        }
  
        default: {
            return state
        }
    }
};

export default reducerOrgs;