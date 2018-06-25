const initialState = {
    1: '',
    2: '',
    3: '',
    4: '',
    currentTab: 1
};

export default function getTab(state = initialState, action) {
    switch (action.type){
        case 'CHANGE_TAB':{
            return Object.assign({}, state, {currentTab: action.currentTab});
        }
        case 'SET_CONTENT':{
            return Object.assign({}, state, ((action) => {
                switch (action.currentTab){
                    case 1:{
                        return {1: action.text};
                    }
                    case 2:{
                        return {2: action.text};
                    }
                    case 3:{
                        return {3: action.text};
                    }
                    case 4:{
                        return {4: action.text};
                    }
                    default:{
                        return state;
                    }
                }
            })(action));
        }
        default:{
            return state;
        }
    }
}
