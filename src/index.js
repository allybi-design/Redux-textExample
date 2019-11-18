import React from "react";
import ReactDOM from "react-dom";
import createSagaMiddleware from 'redux-saga'
import App from "./App";

import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk"
import reducer from "./store/reducers"
import { watchAgeUp } from "./store/sagas"

const sagaMiddleware = createSagaMiddleware()

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

const store = createStore(reducer, Enhancers(applyMiddleware(logAction, sagaMiddleware, thunk)));

sagaMiddleware.run(watchAgeUp)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
