import React from 'react';
import './Experimental.css';

export const Myself = (props) =>{
    return (
        <div className = "person">
            <img src = {props.src} alt="Rick"/>
            <p>Name:     {props.name}</p>
            <p>Age:      {props.age}</p>
            <p>Message:  {props.message}</p>
        </div>
    );
}


