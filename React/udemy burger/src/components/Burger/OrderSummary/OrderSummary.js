import React from 'react';
import GlobalAux from '../../../hoc/GlobalAux/GlobalAux'
import Button from '../../UI/Button/Button';
const OrderSummary =(props)=>{

    const IngredientSummary = Object.keys(props.Ingredients)
    .map(Igkey=>{
        return <li key={Igkey}>
            <span style={{textTransform:'capitalize'}}>{Igkey}</span> : {props.Ingredients[Igkey]}
        </li>
    });
return(
    <GlobalAux>
<h3>Your Order</h3>
<p>A declicious burger with following Ingredients</p>
<ul>
    {IngredientSummary}
</ul>
<p><strong>Total Price:</strong> Rs.{props.totalPrice} </p>
<p>Are you sure to checkout ?</p>
<Button btnType="Success" clicked={props.continueOrder}  >Continue</Button>
<Button btnType="Danger" clicked={props.modalClosed}   >Cancel</Button>
    </GlobalAux>
)

}
//this is like pure component which will render only props changes
export default React.memo(OrderSummary) ;