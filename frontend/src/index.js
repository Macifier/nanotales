import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import frequencyReducer from "./containers/Frequency/store/reducer/frequencyReducer";
import wordNumberReducer from "./components/WordNumberInput/store/reducer/wordNumberInputReducer";
const logger = store => {
  return next => {
    return action => {
      console.log("Action Dispatched", action);
      const result = next(action);
      console.log("Updated State", store.getState());
      return result;
    };
  };
};
const rootReducer = combineReducers({
  frequency: frequencyReducer,
  wordNumber: wordNumberReducer
});
const store = createStore(rootReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <App />{" "}
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
