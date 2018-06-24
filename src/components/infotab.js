import React from 'react';

export function InfoTab(props){
    return (
        <textarea readOnly={props.readOnly} value={props.text} onChange={props.onChange}></textarea>
    );
}