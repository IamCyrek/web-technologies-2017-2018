const initialStateOrgs = {
    textArea1: '',
    textArea2: '',
    textArea3: ''
};


const reducerTextArea = (state , action) => {

    switch (action.type) {
        case 'TextChange': {
            return Object.assign({}, state.reducerOrgs, action.data);
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

export default reducerTextArea;