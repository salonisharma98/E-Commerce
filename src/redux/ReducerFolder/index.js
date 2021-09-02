import { combineReducers } from "redux";
import FetchProductReducer from "./FetchProductReducer";
import {CartReducer} from './CartReducer';

const Reducer = combineReducers({
	userReducer: FetchProductReducer,
	Cart:CartReducer
})
export default Reducer;