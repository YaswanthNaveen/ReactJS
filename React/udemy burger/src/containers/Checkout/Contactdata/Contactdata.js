import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button'
import cssClasses from './Contactdata.css'
import Spinner from '../../../components/UI/Spinner/Spinner'
import axios from '../../../axios-orders'
import Input from '../../../components/UI/Input/Input'
import { connect } from 'react-redux'
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler'
import {updateObject,checkValidity} from '../../../shared/utility'
import * as actions from '../../../store/actions/index';
class Contactdata extends Component {
    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    name: 'name',
                    placeholder: ' Enter name',
                    autoFocus: true
                },
                value: 'praneet',
                label: 'name',
                validation: {
                    required: true
                },
                valid: true,
                touched: false,
                errMsg: ''

            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    name: 'street',
                    placeholder: ' Enter street'
                },
                value: '',
                label: 'street',
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
                errMsg: ''
            },
            state: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    name: 'state',
                    placeholder: ' Enter state'
                },
                value: '',
                label: 'state',
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
                errMsg: ''

            },
            doorNo: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    name: 'doorNo',
                    placeholder: ' Enter doorNo'
                },
                value: '',
                label: 'doorNo',
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
                errMsg: ''
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    name: 'email',
                    placeholder: ' Enter email'
                },
                value: '',
                label: 'email',
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
                errMsg: ''
            },
            mobile: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    name: 'mobile',
                    placeholder: ' Enter mobile'
                },
                value: '',
                label: 'mobile',
                validation: {
                    required: true,
                    minLength: 10
                },
                valid: false,
                touched: false,
                errMsg: ''
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    name: 'deliveryMethod',
                    options: [
                        { value: 'COD', displayValue: 'COD' },
                        { value: 'online', displayValue: 'online' },
                    ]
                },
                value: '',
                label: 'deliveryMethod',
                validation: {},
                valid: true,
                touched: false,
                errMsg: ''

            },
        },
        formValid: false
    }
    orderingHandler = (event) => {
        event.preventDefault();
        let customerDetailsFormData = {};
        for (let formKey in this.state.orderForm) {
            customerDetailsFormData[formKey] = this.state.orderForm[formKey].value
        }
        let orderData = {
            ingredients: this.props.ings,
            price: this.props.price,
            customerDetails: customerDetailsFormData,
            userId: this.props.userId
        }
        // axios.post('/orders.json', orderData)
        //     .then((response) => {
        //         this.setState({ loading: false })
        //         this.props.history.push('/orders')
        //         // this.modalClosed();
        //     })
        //     .catch((err) => {
        //         this.setState({ loading: false })
        //         this.props.history.push('/orders') //only  for demo purpose
        //         // this.modalClosed();
        //     })

        this.props.onOrderBurger(orderData, this.props.token);
    }
    
    inputChangeHandler = (e, key) => {
        // let updatedOrderForm = { ...this.state.orderForm }
        // let updatedOrderFormField = { ...updatedOrderForm[key] }
        // updatedOrderFormField.value = e.target.value;
        // let validitydetails = this.checkValidity(updatedOrderFormField.value, updatedOrderFormField.validation, key);
        // updatedOrderFormField.errMsg = validitydetails[1];
        // updatedOrderFormField.valid = validitydetails[0];
        // updatedOrderFormField.touched = true;
        // updatedOrderForm[key] = updatedOrderFormField;


        let validitydetails =checkValidity(this.state.orderForm[key].value, this.state.orderForm[key].validation, key);
        let updatedOrderFormField = updateObject(this.state.orderForm[key],{
            value : e.target.value,
            errMsg :validitydetails[1],
            valid : validitydetails[0],
            touched : true
        })
        let updatedOrderForm = updateObject(this.state.orderForm,{
            [key]: updatedOrderFormField
        })
        let formIsValid = true;
        for (let field in updatedOrderForm) {

            formIsValid = updatedOrderForm[field].valid && formIsValid;
        }

        this.setState({ orderForm: updatedOrderForm, formValid: formIsValid })
    }
    render() {
        let formElementsArray = [];
        for (let key in this.state.orderForm) {
            formElementsArray.push({
                id: key,
                config: this.state.orderForm[key]
            })
        }
        let form = (
            <form onSubmit={this.orderingHandler}>
                {formElementsArray.map(formElement => (
                    <Input
                        key={formElement.id}
                        inputtype={formElement.config.elementType}
                        config={formElement.config.elementConfig}
                        value={formElement.config.value}
                        errMsg={formElement.config.errMsg}
                        invalid={!formElement.config.valid}
                        shouldValidate={formElement.config.validation}
                        touched={formElement.config.touched}
                        changed={(e) => this.inputChangeHandler(e, formElement.id)}
                    />)

                )}
                <Button btnType="Success" disabled={!this.state.formValid}>Order</Button>
            </form>)
        if (this.props.loading) {
            form = <Spinner />
        }
        return (
            <div className={cssClasses.Contactdata}>
                <h4>Enter ur details</h4>
                {form}

            </div>
        )
    }

}
const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        loading: state.order.loading,
        token: state.auth.token,
        userId: state.auth.userId
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onOrderBurger: (orderData, token) => dispatch(actions.purchaseBurger(orderData, token))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Contactdata, axios));