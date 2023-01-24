import React from 'react';
import cssClasses from './Navigationitems.css'
import Navigationitem from './Navigationitem/Navigationitem'
const Navigationitems =(props)=>{
    return(
        <ul className={cssClasses.Navigationitems}>
     <Navigationitem  link='/'>Burger Builder</Navigationitem>
     {props.isAuthenticated ? <Navigationitem link='/orders' >Orders</Navigationitem> : null}
     {!props.isAuthenticated
     ? <Navigationitem link='/auth' >Authenticate</Navigationitem>
     : <Navigationitem link='/logout' >Logout</Navigationitem>}
 </ul>
    )
 
}
export default Navigationitems;