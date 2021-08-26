import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {fetchProductsData} from '../../redux/ActionsFolder/Action'

const ProductList=()=>{
    
    const mystate=useSelector(state=>state);

    console.log(mystate,"mystate")

    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(fetchProductsData())
    },[])
   
    return(
        <div>
            
        </div>
    )
}

export default ProductList;