import { useEffect } from 'react';
import {
  FETCH_CART_SUCCESS,
  REMOVE_FROM_CART
 } from '../ActionTypes/Actiontypes';

 // product-product that we are going to add in cart

 export const addToCart=(product,CartType)=>(dispatch,getState)=>{
  const cartItems=getState().Cart.cartItems
  CartType = CartType || ''
  let alreadyExist=false
  cartItems.forEach(x=>{
    if(x.id===product.id){   
      alreadyExist=true;
      if(CartType==='increase'){
         x.count++
      }
      else if(CartType==='decrease'){
          x.count--
      }
      else{
        return x.count
      }
      // x.count++
      console.log(x.count,"after")
    }
  })
  if(!alreadyExist){
    cartItems.push({...product,count:1})
  }
  dispatch({
    type:FETCH_CART_SUCCESS,
    payload:{cartItems}
  })
  localStorage.setItem('cartItems',JSON.stringify(cartItems))
 }

 export const removeFromCart=(product)=>(dispatch,getState)=>{
  const cartItems=getState().Cart.cartItems.slice().filter((x)=>x.id !== product.id)
   dispatch({
     type:REMOVE_FROM_CART,
     payload:{cartItems},
   })
   localStorage.setItem('cartItems', JSON.stringify(cartItems))
 }
