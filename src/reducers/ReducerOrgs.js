import * as constants from '../Constants'

const initialStateOrgs = {

};


const reducerOrgs = (state , action) => {

    switch (action.type) {
        case constants.GET_ORGS_SUCCESS: {
            return Object.assign({}, state.reducerOrgs, action.Orgs);
        }
  
        default: {
            if (state !== undefined){
                return state;
            }else{
                return initialStateOrgs;
            }
        }
    }
};

export default reducerOrgs;