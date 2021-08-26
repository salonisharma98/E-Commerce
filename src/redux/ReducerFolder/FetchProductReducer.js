import {
	FETCH_PRODUCTS_REQUEST,
	FETCH_PRODUCTS_SUCCESS,
	FETCH_PRODUCTS_FALIUR,
} from '../ActionTypes/Actiontypes';

const initialState = {
	isLoading: "true",
	products: {},
	error: ""
}
const FetchProductReducer = (state = initialState, action) => {
	switch (action.payload) {
		case FETCH_PRODUCTS_REQUEST:
			return {
				isLoading: "true",
				error: ""
			}
		case FETCH_PRODUCTS_SUCCESS:
			return {
				isLoading: "false",
				products: action.payload,
				error: ""
			}
		case FETCH_PRODUCTS_FALIUR:
			return {
				isLoading: "false",
				error: action.payload,
			}
		default:
			return state
	}
}
export default FetchProductReducer;