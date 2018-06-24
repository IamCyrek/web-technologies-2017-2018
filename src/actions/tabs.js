import store from '../index';

function changeTab(e) {
    return {
        type: 'CHANGE_TAB',
        currentTab: parseInt(e.target.name, 10)
    }
}

function editTab() {
    return {
        type: 'EDIT_TAB'
    }
}

function setContent(e) {
    return {
        type: 'SET_CONTENT',
        currentTab: store.getState().tabs.currentTab,
        text: e.target.value
    }
}

export {changeTab, editTab, setContent};