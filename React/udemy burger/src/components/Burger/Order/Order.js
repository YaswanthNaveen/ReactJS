import React from 'react'
import cssClasses from './Order.css'

const Order =(props)=>
{

    let Ingredients =[];
    for(let key in props.ingredients){
        Ingredients.push({
            name:key,
            qty:props.ingredients[key]
        })
    }
    let ingredientsOutput = Ingredients.map(igkey=>{
        return <span
                style={{
                    textTransform:'capitalize',
                    display:'inline-block',
                    margin:'0 8px',
                    border: '1px solid #ccc',
                    padding:'5px'
                }} 
                 key={igkey.name} >{igkey.name} : {igkey.qty }</span>
    })
    return(
        <div className={cssClasses.Order}>
            <p>Ingredients:{ingredientsOutput}</p>
            <p>Price:  <strong>USD {props.price}</strong></p>
        </div>
    )
}
 export default Order;