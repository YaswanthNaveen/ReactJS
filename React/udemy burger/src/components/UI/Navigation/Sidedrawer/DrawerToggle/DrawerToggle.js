import React from 'react';
import cssClasses from './DrawerToggle.css'
const DrawerToggle =(props)=>{
    return(
        <div  className={cssClasses.DrawerToggle} onClick={props.toggle} >
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}
export default DrawerToggle;