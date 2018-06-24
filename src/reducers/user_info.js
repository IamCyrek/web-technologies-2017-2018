const initialState = {
    userImg: '',
    userName: '',
    userLogin: '',
    userBio: '',
    userCompany: '',
    userLocation: '',
    userEmail: '',
    userSocial: '',
    isError: false,
    errName: '',
    isLoaded: false
};

export default function getInfo(state = initialState, action) {
    switch (action.type){
        case 'GET_SUCCESS':{
            return Object.assign({}, state, action.data);
        }
        case 'GET_ERROR':{
            return Object.assign({}, state, {isError: action.isError, errName: action.errName})
        }
        case 'SERVER_ERROR':{
            return Object.assign({},state,{isError: action.isError, errName: action.errName})
        }
        default:{
            return state;
        }
    }
}