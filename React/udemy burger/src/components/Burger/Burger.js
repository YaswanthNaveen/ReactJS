import React from 'react';
import cssClasses from './Burger.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
const Burger =(props)=>{
    let stuffedIngredients = Object.keys(props.ingredients).map(igKey=>{
        // creating a array of length equal to quantity of one ingredient & mapping it
        return [...Array(props.ingredients[igKey])].map((_,i)=>{
            return <BurgerIngredient key={igKey + i} type={igKey}/>
        })
    })
    .reduce((prev,next)=>{
        return prev.concat(next);
   },[])

    if(stuffedIngredients.length===0){
        stuffedIngredients =<p>Add ingredients</p>
    }
    return(
        <div className={cssClasses.Burger}>
             <BurgerIngredient type='BreadTop'/>
             {stuffedIngredients}
        <BurgerIngredient type='BreadBottom'/>
        </div>
       
    );
}
export default Burger;