import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import { Provider } from "react-redux";
import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import reducer_A from "./store/reducers";
// import reducer_B from "./store/reducer_B";

const rootReducer = combineReducers({
  reducerA: reducer_A
  // reducerB: reducer_B,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const logAction = () => {
  return (next) => {
    return (action) => {
      const result = next(action);
      console.log(`Caught Action - ${JSON.stringify(result)}`);
      return result;
    };
  };
};

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logAction, thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
