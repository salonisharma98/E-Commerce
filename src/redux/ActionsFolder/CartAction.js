import zIndex from '@material-ui/core/styles/zIndex';
import {
  FETCH_CART_SUCCESS,
  REMOVE_FROM_CART
 } from '../ActionTypes/Actiontypes';

 // product-product that we are going to add in cart

 export const addToCart=(product,CartTpe)=>(dispatch,getState)=>{
   //console.log(CartTpe,"!!!!!!!TYPEe")
  const cartItems=getState().Cart.cartItems
  //console.log(CartTpe,'qty')
  CartTpe = CartTpe || 'none'
  let alreadyExist=false
  //console.log(CartTpe,'Caert')
  cartItems.forEach(x=>{
    console.log(x.count,"before")
    if(x.id===product.id){   
      alreadyExist=true;
      if(CartTpe==='increase'){
        x.count++
      }
      else if(CartTpe==='decrease'){
        x.count--
      }
      else{
        return x.count
      }
    //  CartTpe ? x.count++ : x.count--
      console.log(CartTpe,"TYPEe")
    //   x.count++
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
