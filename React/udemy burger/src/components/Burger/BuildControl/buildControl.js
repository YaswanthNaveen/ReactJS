import React from 'react';
import cssClasses from './buildControl.css';
const buildControl = (props) =>
    (
        <div className={cssClasses.BuildControl}>
        <div className={cssClasses.Label}>{props.label}</div>
        <button className={cssClasses.Less} disabled={props.disabled}onClick={props.less}>Less</button>
        <button className={cssClasses.More} onClick={props.more}>More</button>
    </div>
    )
   
   


export default buildControl;