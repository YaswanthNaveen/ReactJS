import React from 'react';
import cssClasses from  './Button.css';
const Button =(props) =>{
    
    return(
    <button 
    className={[cssClasses.Button,cssClasses[props.btnType]].join(' ')}
      disabled={props.disabled}  
    onClick={props.clicked}>{props.children}</button>

)};

export default Button;