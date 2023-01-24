import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';
const intialState = {
    ingredients: null,
    // ingredients: {
    //     Salad: 1,
    //     Bacon: 1,
    //     Meat: 1,
    //     Cheese: 1
    // },
    totalPrice: 10,
    error: false,
    building: false
}
const ingredientsPrice = {
    Salad: 1,
    Bacon: 1,
    Meat: 5,
    Cheese: 3
}
const addIngredient = (state, action) => {
    const updatedIngredient = { [action.ingredientName]: state.ingredients[action.ingredientName] + 1 }
    const updatedIngredients = updateObject(state.ingredients, updatedIngredient);
    const updatedState = {
        ingredients: updatedIngredients,
        totalPrice: state.totalPrice + ingredientsPrice[action.ingredientName],
        building: true
    }
    return updateObject(state, updatedState);
};
const removeIngredient = (state, action) => {
    const updatedIng = { [action.ingredientName]: state.ingredients[action.ingredientName] - 1 }
    const updatedIngs = updateObject(state.ingredients, updatedIng);
    const updatedState = {
        ingredients: updatedIngs,
        totalPrice: state.totalPrice - ingredientsPrice[action.ingredientName],
        building: true
    }
    return updateObject(state, updatedState);
};
const setIngredients = (state, action) => {
    return updateObject(state, {
        ingredients: {
            Salad: action.ingredients.Salad,
            Bacon: action.ingredients.Bacon,
            Cheese: action.ingredients.Cheese,
            Meat: action.ingredients.Meat
        },
        totalPrice: 4,
        error: false,
        building: false
    });
};

const fetchIngredientsFailed = (state, action) => {
     //return updateObject(state, { error: true });
    return updateObject(state, {
        ingredients: {
            Salad: 1,
            Bacon: 1,
            Cheese: 1,
            Meat: 1
        },
        totalPrice: 4,
        error: false,
        building: false
    });
};
const reducer = (state = intialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT: return addIngredient(state, action);
        case actionTypes.REMOVE_INGREDIENT: return removeIngredient(state, action);
        case actionTypes.SET_INGREDIENTS: return setIngredients(state, action);
        case actionTypes.FETCH_INGREDIENTS_FAILED: return fetchIngredientsFailed(state, action);
        default: return state;
    }
};

export default reducer;