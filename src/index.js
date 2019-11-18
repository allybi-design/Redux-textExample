import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk"
import reducer from "./store/reducers"

const Enhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const logAction = () => {
  return (next) => {
    return (action) => {
      const result = next(action);
      console.log(`Caught Action - ${JSON.stringify(result)}`);
      return result;
    };
  };
};

const store = createStore(reducer, Enhancers(applyMiddleware(logAction, thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
