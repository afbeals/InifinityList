import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import AppContainer from "./AppContainer";
import { store } from "./config";
import "./styles.scss";

render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById("root")
);
