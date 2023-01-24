import React ,{Component} from 'react';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import axios from '../../axios-orders'
import Order from '../../components/Burger/Order/Order'
import Spinner from '../../components/UI/Spinner/Spinner'
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

class Orders extends Component{
    // state={
    //     orders:[],
    //     loading:true
    // }
    componentDidMount(){
//         axios.get('/orders.json')
//         .then(res=>{
//   const fetchedOrders=[];
//   for(let key in res.data){
//       fetchedOrders.push({
//           ...res.data[key],
//           id:key
//       });
//   }
//   this.setState({loading:false,orders:fetchedOrders})
//         })
//         .catch(()=>{
            // const fetchedOrders =[];
            // const ingredients= {
            //     Salad: 1,
            //     Bacon: 1,
            //     Meat: 1,
            //     Cheese: 1
            // }
            // fetchedOrders.push({
            //     id:1,
            //     ingredients: ingredients,
            //     price:123
            // })
            // fetchedOrders.push({
            //     id:2,
            //     ingredients: ingredients,
            //     price:13
            // })

//             this.setState({loading:false,orders:fetchedOrders})
//         })

this.props.onFetchOrders(this.props.token, this.props.userId);
    }

    render(){

        let orders = <Spinner/>
        if(!this.props.loading){
            orders= (this.props.orders.map(order=>{
                return <Order 
                key={order.id}
                ingredients={order.ingredients}
                price={+order.price}/>
            }))
        }
        return(
            <div>
                {orders}
            </div>

        )
    }

}
const mapStateToProps = state => {
    return {
        orders: state.order.orders,
        loading: state.order.loading,
        token: state.auth.token,
        userId: state.auth.userId
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchOrders: (token, userId) => dispatch( actions.fetchOrders(token, userId) )
    };
};

export default connect( mapStateToProps, mapDispatchToProps )( withErrorHandler( Orders, axios ) );