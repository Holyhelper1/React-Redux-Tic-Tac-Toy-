import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Game from "./Game";
// import { ReduxRenderer } from './redux-manager';
import { store } from "./store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Game />
    </Provider>
  </React.StrictMode>
  // <ReduxRenderer store={store}>
  // </ReduxRenderer>
);
