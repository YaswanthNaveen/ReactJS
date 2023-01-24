import React from 'react'
import PropTypes from 'prop-types';
import cssClasses from  "./BurgerIngredient.css";
const BurgerIngredient =(props)=>{
    let Ingredient= null;
    switch(props.type){
        case ('BreadBottom'):
            Ingredient=<div className={cssClasses.BreadBottom}></div>
            break;
        case ('BreadTop'):
            Ingredient=(<div className={cssClasses.BreadTop}>
                <div className={cssClasses.Seeds1} ></div>
                <div className={cssClasses.Seeds2} ></div>
            </div>)
            break;
        case ('Bacon'):
            Ingredient=<div className={cssClasses.Bacon}></div>
            break;
        case ('Salad'):
            Ingredient=<div className={cssClasses.Salad}></div>
            break;
        case ('Cheese'):
            Ingredient=<div className={cssClasses.Cheese}></div>  
            break;
        case ('Meat'):
            Ingredient=<div className={cssClasses.Meat}></div>
            break;  
        default :
            Ingredient=null;
    }
    return Ingredient;
}
BurgerIngredient.propTypes={
    type : PropTypes.string.isRequired
}
export default BurgerIngredient;