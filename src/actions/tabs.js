import store from '../store/store';

function changeTab(e) {
    return {
        type: 'CHANGE_TAB',
        currentTab: parseInt(e.target.name, 10)
    }
}


function setContent(e) {
    return {
        type: 'SET_CONTENT',
        currentTab: store.getState().tabs.currentTab,
        text: e.target.value
    }
}

export {changeTab, setContent};
