import {ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST} from '../ActionTypes/Actiontypes';

  export const addToWishlist=(item)=>(dispatch,getState)=>{

    const wishlistItems=getState().WishList.wishlistItems
    console.log(wishlistItems,'wishlistItems from local storage')
    console.log(item,'product')
  
    let alreadyExist=false
  
   wishlistItems.forEach(x=>{
      if(x.id===item.id){   
        alreadyExist=true;
      }
    })
    if(!alreadyExist){
      wishlistItems.push({...item})
    }
    dispatch({
      type:ADD_TO_WISHLIST,
      payload:{wishlistItems}
    })
    localStorage.setItem('wishlist',JSON.stringify(wishlistItems))
   }
  
   export const removeFromWishList=(item)=>(dispatch,getState)=>{
    const wishlistItems=getState().WishList.wishlistItems.slice().filter((x)=>x.id !== item.id)
     dispatch({
       type:REMOVE_FROM_WISHLIST,
       payload:{wishlistItems},
     })
     localStorage.setItem('wishlist', JSON.stringify(wishlistItems))
   }