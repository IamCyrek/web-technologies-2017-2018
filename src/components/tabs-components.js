import React from 'react';

export function TabsComponents(props) {
    return (
        <div className='editableTab'>
            <textarea value={props.text[props.currentTab]}
                      onChange={props.onChange}></textarea>
        </div>
    );
}
