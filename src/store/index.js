import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import weatherReducer from "./weather";

const reducer = combineReducers({
  weatherStore: weatherReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
