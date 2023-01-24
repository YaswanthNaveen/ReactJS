import React, { Component } from 'react';
import GlobalAux from '../../hoc/GlobalAux/GlobalAux';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import axios from '../../axios-orders'
import Spinner from '../../components/UI/Spinner/Spinner'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import * as actionCreators from '../../store/actions/index'
import { connect } from 'react-redux'

export class BurgerBuilder extends Component {
    state = {
        // ingredients: {
        //     Salad: 1,
        //     Bacon: 1,
        //     Meat: 1,
        //     Cheese: 1
        // },
        // ingredients: null,
        // totalPrice: 10,
        purchasable: false,
    }
    // ingredientsPrice = {
    //     Salad: 1,
    //     Bacon: 1,
    //     Meat: 5,
    //     Cheese: 3
    // }
    componentDidMount() {
    
        // axios.get('/ingredients.json')
        //     .then((res) => {
        //         this.setState({ ingredients: res.data })
        //     })
        //     .catch(() => {
        //         this.setState({
        //             ingredients: {
        //                 Salad: 1,
        //                 Bacon: 1,
        //                 Meat: 1,
        //                 Cheese: 1
        //             }
        //         })
        //     })
        this.props.onInitIngredients();
    }
    ordered = () => {

        if (this.props.isAuthenticated) {
            this.setState({ purchasable: true })
        } else {
            this.props.onSetAuthRedirectPath('/checkout');
            this.props.history.push('/auth');
        }
    }
    modalClosed = () => {
        this.setState({ purchasable: false })
    }
    continueOrder = () => {

        // let queryParam = [];
        // for(let i in this.props.ings){
        //        queryParam.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.props.ings[i]))
        // }
        // queryParam.push('price='+this.props.totalPrice)
        // let  queryParamString = queryParam.join("&")

        // this.props.history.push({
        //     pathname:'/checkout',
        //     search:'?'+ queryParamString
        // })

        this.props.onInitPurchase();
        this.props.history.push('/checkout');
    }
    // addIngredient = (type) => {
    //     const updatedIngredients = { ...this.props.ings };
    //     updatedIngredients[type] = updatedIngredients[type] + 1;
    //     let updatedTotalPrice = this.props.totalPrice;
    //     updatedTotalPrice = updatedTotalPrice + this.ingredientsPrice[type]
    //     this.setState({ ingredients: updatedIngredients, totalPrice: updatedTotalPrice })
    // }
    // removeIngredient = (type) => {
    //     const updatedIngredients = { ...this.props.ings };
    //     updatedIngredients[type] = updatedIngredients[type] - 1;
    //     let updatedTotalPrice = this.props.totalPrice;
    //     updatedTotalPrice = updatedTotalPrice - this.ingredientsPrice[type]
    //     this.setState({ ingredients: updatedIngredients, totalPrice: updatedTotalPrice })
    // }


    render() {
        let orderSummary = null;
        let burger = this.props.error ? <p>Ingredients can't be loaded!</p> : <Spinner />;
        if (this.props.ings) {
            const disabledIngredients = { ...this.props.ings }
            let TotalSum = 0;
            for (let key in disabledIngredients) {
                TotalSum += disabledIngredients[key];
                disabledIngredients[key] = disabledIngredients[key] <= 0;
            }
            burger = <GlobalAux>
                <Burger ingredients={this.props.ings} />
                <BuildControls checkout={TotalSum === 0}
                    price={this.props.totalPrice}
                    added={this.props.addIngredient}
                    remove={this.props.removeIngredient}
                    ordered={this.ordered}
                    isAuth={this.props.isAuthenticated}
                    disabled={disabledIngredients} />
            </GlobalAux>
            orderSummary = <OrderSummary
                Ingredients={this.props.ings}
                modalClosed={this.modalClosed}
                continueOrder={this.continueOrder}
                totalPrice={this.props.totalPrice} />

        }

        return (
            <GlobalAux>
                <Modal show={this.state.purchasable} modalClosed={this.modalClosed} >
                    {orderSummary}
                </Modal>
                {burger}
            </GlobalAux>
        )
    }
}

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        totalPrice: state.burgerBuilder.totalPrice,
        error: state.burgerBuilder.error,
        isAuthenticated: state.auth.token !== null,
        token:state.auth.token
    };
}

const mapDispatchToProps = dispatch => {
    return {
        addIngredient: (ingKey) => dispatch(actionCreators.addIngredient(ingKey)),
        removeIngredient: (ingKey) => dispatch(actionCreators.removeIngredient(ingKey)),
        onInitIngredients: () => dispatch(actionCreators.initIngredients()),
        onInitPurchase: () => dispatch(actionCreators.purchaseInit()),
        onSetAuthRedirectPath: (path) => dispatch(actionCreators.setAuthRedirectPath(path))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));