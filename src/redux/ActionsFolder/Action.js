import {
	FETCH_PRODUCTS_REQUEST,
	FETCH_PRODUCTS_SUCCESS,
	FETCH_PRODUCTS_FALIUR,
} from '../ActionTypes/Actiontypes';
import axios from 'axios';

export const fetchProductRequest = () => {
	return {
		type: FETCH_PRODUCTS_REQUEST,
	}
}
export const fetchProductSuccess = (products) => {
	return {
		type: FETCH_PRODUCTS_SUCCESS,
		payload: products
	}
}
export const fetchProductFaliur = (error) => {
	return {
		type: FETCH_PRODUCTS_FALIUR,
		payload: error
	}
}
export const fetchProductsData = () => {
	//console.log("1")
	return (dispatch) => {
		//console.log("2")
		dispatch(fetchProductRequest)
		//console.log("3")
		axios.get('/data.json').then(res => {
			const products = res.data
			console.log(products,"products from Action.js")
			dispatch(fetchProductSuccess(products))
		}).catch(error => {
			const errormsg = error.message
			dispatch(fetchProductFaliur(errormsg))
		})
	}
}

