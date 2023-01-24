import React, { Component } from 'react';
import cssClasses from './Auth.css';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button'
import Spinner from '../../components/UI/Spinner/Spinner';
import * as actions from '../../store/actions/index'
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { checkValidity, updateObject } from '../../shared/utility';


class Auth extends Component {
    state = {
        authForm: {
            Email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    name: 'Email',
                    placeholder: ' Enter email address',
                    autoFocus: true
                },
                value: '',
                label: 'Email',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: true,
                touched: false,
                errMsg: ''

            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    name: 'Password',
                    placeholder: ' Enter password',
                },
                value: '',
                label: 'Password',
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: true,
                touched: false,
                errMsg: ''

            },
        },
        isSignup: true
    }
    componentDidMount() {
        if (!this.props.buildingBurger && this.props.authRedirectPath !== '/') {
            this.props.onSetAuthRedirectPath();
        }

    }

    inputChangeHandler = (e, key) => {


        let validitydetails = checkValidity(e.target.value, this.state.authForm[key].validation, key);
        let updatedAuthForm = updateObject(this.state.authForm, {
            [key]: updateObject(this.state.authForm[key], {
                value: e.target.value,
                touched: true,
                valid: validitydetails[0]
            })
        });
        // let updatedAuthForm = {
        //     ...this.state.authForm,
        //     [key]: {
        //         ...this.state.authForm[key],
        //         value: e.target.value,
        //         touched: true,
        //         valid: validitydetails[0]
        //     }
        // }



        this.setState({ authForm: updatedAuthForm })
    }
    authHandler = (event) => {
        event.preventDefault();
        this.props.onAuth(this.state.authForm.Email.value, this.state.authForm.password.value, this.state.isSignup);

    }
    switchAuthModeHandler = () => {
        this.setState(prevState => {
            return { isSignup: !prevState.isSignup };
        });
    }
    render() {
        let authFormArray = [];
        for (let key in this.state.authForm) {
            authFormArray.push({
                id: key,
                config: this.state.authForm[key]
            })
        }
        let form = (
            <form onSubmit={this.authHandler}>
                {authFormArray.map(formElement => (
                    <Input
                        key={formElement.id}
                        inputtype={formElement.config.elementType}
                        config={formElement.config.elementConfig}
                        value={formElement.config.value}
                        invalid={!formElement.config.valid}
                        shouldValidate={formElement.config.validation}
                        touched={formElement.config.touched}
                        errMsg={formElement.config.errMsg}
                        changed={(e) => this.inputChangeHandler(e, formElement.id)}
                    />)

                )}
                <Button btnType="Success" >Submit</Button>
            </form>)
        if (this.props.loading) {
            form = <Spinner />
        }
        let errorMessage = null;

        if (this.props.error) {
            errorMessage = (
                <p>{this.props.error.message}</p>
            );
        }
        let authRedirect = null;

        if (this.props.isAuthenticated) {
            authRedirect = <Redirect to={this.props.authRedirectPath} />
        }
        return (
            <div className={cssClasses.Auth}>
                {authRedirect}
                {errorMessage}
                {form}
                <Button
                    clicked={this.switchAuthModeHandler}
                    btnType="Danger">SWITCH TO {this.state.isSignup ? 'SIGNIN' : 'SIGNUP'}</Button>
            </div>
        )
    }
}
// const mapStateToProps = state => {
//     return {
//         orders: state.order.orders,
//         loading: state.order.loading
//     };
// };
const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        isAuthenticated: state.auth.token !== null,
        buildingBurger: state.burgerBuilder.building,
        authRedirectPath: state.auth.authRedirectPath,
        token: state.auth.token
    };
};
const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password, isSignup) => dispatch(actions.authenticate(email, password, isSignup)),
        onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath('/'))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Auth, axios));
