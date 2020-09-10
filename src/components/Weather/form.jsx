import React from 'react';
import './form.css';

function Form (props) {

    return (
        <form onSubmit={props.api_getter} className = "form">
            <label htmlFor="city" className = "text">City:</label><br />
            <input type="text" name = "city" placeholder = "City" className = "input" /><br />
            <button className = "btn">take</button>
        </form>
    )
}
export default Form;