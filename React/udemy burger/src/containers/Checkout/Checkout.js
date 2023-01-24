import React, { Component } from 'react';
import CheckoutSummary from '../../components/Burger/Order/CheckoutSummary/CheckoutSummary'
import Contactdata from './Contactdata/Contactdata'
import { Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'


class Checkout extends Component {
    // state={
    //     ingredients:null,
    //     TotalPrice:0
    // }
    // componentWillMount(){
    //     const query = new URLSearchParams(this.props.location.search);
    //     let ingredients= {};
    //     for(let param of query.entries()){

    //            if(param[0]==='price'){
    //                this.setState({TotalPrice:param[1]})
    //            }else{
    //             ingredients[param[0]]= +param[1];
    //            }


    //     }
    //     this.setState({ingredients:ingredients})
    // }
    continueHandler = () => {
        this.props.history.replace('/checkout/contact-data')
    }
    cancelHandler = () => {
        this.props.history.goBack()
    }
    render() {
        let summary = <Redirect to="/" />
        if (this.props.ings) {
            const purchasedRedirect = this.props.purchased ? <Redirect to="/" /> : null;
            summary = (
                <div>
                    {purchasedRedirect}
                    <CheckoutSummary
                        ingredients={this.props.ings}
                        cancel={this.cancelHandler}
                        continue={this.continueHandler} />
                    <Switch>
                        <Route
                            path={this.props.match.url + '/contact-data'}
                           // path={this.props.match.path + '/contact-data'}
                            exact
                            component={Contactdata}
                        //   render={(props)=><Contactdata
                        //      ingredients={this.props.ingredients}
                        //      price={this.props.totalPrice}
                        //      {...props}
                        //      /> }
                        />
                        {/* <Route render={()=><h1>Not found </h1>}/> */}
                    </Switch>
                </div>
            );
        }
        return summary;
    }

}
const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        purchased: state.order.purchased
    }
};

export default connect(mapStateToProps)(Checkout);