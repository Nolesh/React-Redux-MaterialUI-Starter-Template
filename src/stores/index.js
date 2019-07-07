import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// Logger with default options
import logger from "redux-logger";
import * as reducers from '../reducers'

export default function configureStore(initialState) {
  const combinedReducer = combineReducers(reducers);
  const store = createStore(combinedReducer, initialState, applyMiddleware(thunk, logger));
  return store;
}