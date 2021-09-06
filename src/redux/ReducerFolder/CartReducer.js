import {FETCH_CART_SUCCESS, REMOVE_FROM_CART,DECRESE_TO_CART,INCREASE_TO_CART} from '../ActionTypes/Actiontypes';

export const CartReducer=(state={cartItems: JSON.parse(localStorage.getItem('cartItems') || "[]")},action)=>{
  switch(action.type){
    case FETCH_CART_SUCCESS:
      return{
        cartItems:action.payload.cartItems      
      }
    case REMOVE_FROM_CART:
      return{
         cartItems:action.payload.cartItems
      }
    // case INCREASE_TO_CART:
    //   console.log(action.payload,'from reducer')
    //   // return{
    //   //     cartItems.count:action.payload.cartItems
    //   // }
    // case DECRESE_TO_CART:
    default:
      return state;
  }
}