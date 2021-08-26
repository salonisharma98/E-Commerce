import { combineReducers } from "redux";
import FetchProductReducer from "./FetchProductReducer";

const Reducer = combineReducers({
    userReducer:FetchProductReducer,
})
export default Reducer;