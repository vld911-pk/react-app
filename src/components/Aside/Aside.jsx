import React from 'react';
import s from './Aside.module.css';
import {NavLink} from 'react-router-dom';
let Aside = () =>{
    return (
        <aside className = {`${s.app} ${s.border}`}> 
            <div> 
                 <NavLink to ="/content" ><button className = {s.btn}>My page</button></NavLink><br />
            </div>
            <div> 
                 <NavLink to ="/dialogs"><button className = {s.btn}>Dialogs</button></NavLink><br /> 
            </div>
            <div>
                 <NavLink to ="/weather"><button className = {s.btn}>Weather</button></NavLink><br />
            </div>
       </aside>
    );
}

export default Aside;