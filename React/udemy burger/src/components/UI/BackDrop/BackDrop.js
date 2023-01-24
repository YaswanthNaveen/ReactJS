import React from 'react';
import cssClasses from './BackDrop.css'
const BackDrop = (props) => (
    props.show ? <div className={cssClasses.BackDrop} onClick={props.Click}></div> : null

);
export default BackDrop;