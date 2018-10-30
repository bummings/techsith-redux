import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import "./styles.css";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./store/reducer";

const store = createStore(reducer);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
