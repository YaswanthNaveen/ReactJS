import React from 'react';
import BuildControl from '../BuildControl/buildControl';
import cssClasses from './BuildControls.css' 

const Controls=[
    {label:"Salad",type:"Salad"},
    {label:"Bacon",type:"Bacon"},
    {label:"Cheese",type:"Cheese"},
    {label:"Meat",type:"Meat"},
]
 export const BuildControls =(props)=> {
     return(
        <div className={cssClasses.BuildControls}>
           <p>Current Price : <strong>{props.price}</strong></p>
            {Controls.map(control=>{
           return  <BuildControl key={control.label} label={control.label} more={()=>props.added(control.type)} less={()=>props.remove(control.type)} disabled={props.disabled[control.type]}></BuildControl>
        })} 
        <button disabled={props.checkout} 
         onClick={props.ordered} className={cssClasses.OrderButton}>{props.isAuth ? 'ORDER NOW' : 'SIGN UP TO ORDER'}</button>
        </div>
        
     )

}
    
 
  export default BuildControls;