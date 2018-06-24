import {combineReducers} from 'redux';
import userInfo from './user_info';
import tabs from './tabs';
import getOtherInfo from './other_info'

export default combineReducers({
    userInfo: userInfo,
    tabs: tabs,
    otherInfo: getOtherInfo
});