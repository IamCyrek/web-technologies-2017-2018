import React from 'react';

export default function Pic(props) {
    return (
        <img src={props.src} alt={props.value} className={props.class}/>
    );
}