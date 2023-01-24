import React from 'react';
import {NavLink} from 'react-router-dom'
import cssClasses from './Navigationitem.css';
const Navigationitem =(props)=>{
    return(
        <li className={cssClasses.Navigationitem}>
        <NavLink 
        to={props.link}
        exact
        activeClassName={cssClasses.active}
        >{props.children}</NavLink>
    </li>
    )
}



export default Navigationitem; 