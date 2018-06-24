import React from 'react';
import UserInfo from '../containers/github';


export default class InfoApp extends React.Component{
    render() {
        return (
            <div className='main_info'>
                <UserInfo/>
            </div>
        );
    }
}