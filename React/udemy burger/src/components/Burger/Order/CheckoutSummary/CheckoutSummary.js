import React from 'react';
import Button from '../../../UI/Button/Button'
import Burger from '../../Burger';
import cssClasses from './CheckoutSummary.css'
const CheckoutSummary =(props)=>{
    return(
        <div className={cssClasses.CheckoutSummary}>
            <h1>A declicious burger is waiting for you</h1>
            <div style={{width:"100%", margin:"auto"}} >
            <Burger ingredients={props.ingredients}/>
            </div>
           
            <Button btnType="Danger" clicked={props.cancel}   >Cancel</Button>
            <Button btnType="Success" clicked={props.continue}>Continue</Button>
            
        </div>
    )

}
export default CheckoutSummary;