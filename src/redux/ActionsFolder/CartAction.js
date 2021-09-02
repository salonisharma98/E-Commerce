import {
  FETCH_CART_SUCCESS,
  REMOVE_FROM_CART
 } from '../ActionTypes/Actiontypes';

 // product-product that we are going to add in cart

 export const addToCart=(product)=>(dispatch,getState)=>{

  const cartItems=getState().Cart.cartItems
  console.log(cartItems,'cartitems from local storage')
  console.log(product,'product')

  let alreadyExist=false

  cartItems.forEach(x=>{
    if(x[0].id===product[0].id){   
      alreadyExist=true;
      x.count++;
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
  const cartItems=getState().Cart.cartItems.slice().filter((x)=>x[0].id !== product[0].id)
   dispatch({
     type:REMOVE_FROM_CART,
     payload:{cartItems},
   })
   localStorage.setItem('cartItems', JSON.stringify(cartItems))
 }