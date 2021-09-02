import {FETCH_CART_SUCCESS, REMOVE_FROM_CART} from '../ActionTypes/Actiontypes';

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
    default:
      return state;
  }
}