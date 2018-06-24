import React from 'react';
import {InfoTab} from './infotab'

export function EditableTab(props) {
    return (
        <div className='editableTab'>
            <button onClick={props.onClick} className='editButton'>{props.readOnly ? ('Edit') : ('Save changes')}</button>
            <InfoTab readOnly={props.readOnly} text={props.text[props.currentTab]} currentTab={props.currentTab} onChange={props.onChange}/>
        </div>
    );
}