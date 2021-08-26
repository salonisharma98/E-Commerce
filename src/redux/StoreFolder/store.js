import { applyMiddleware, createStore } from "redux";
import thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";
import allReducer from '../ReducerFolder/allReducer';

const store = createStore( allReducer, composeWithDevTools( applyMiddleware(thunk)))

export default store;