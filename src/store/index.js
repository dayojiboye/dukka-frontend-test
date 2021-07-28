// using Redux for global state management

import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import employees from "./reducers/employees";

const rootReducer = combineReducers({
  employees,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware())
);
