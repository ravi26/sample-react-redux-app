import React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import currentNumber from "../src/reducers/increment";

import "./styles.css";
import App from "../src/component/App";
const store = createStore(currentNumber);
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
