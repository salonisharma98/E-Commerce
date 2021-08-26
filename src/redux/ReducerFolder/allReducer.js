import { combineReducers } from "redux";
import FetchProductReducer from "./FetchProductReducer";

const allReducer = combineReducers({
    FetchProductReducer,
})
export default allReducer;