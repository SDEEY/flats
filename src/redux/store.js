import {applyMiddleware, combineReducers, createStore} from "redux";
import flatsReducer from "./flatsReducer";
import thunk from "redux-thunk";

const reducers = combineReducers({
    flatsReducer,
})

export const store = createStore(reducers, applyMiddleware(thunk))