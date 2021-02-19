import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import reducer, { initialState } from "./state/reducer";
import { StateProvider } from "./state/StateProvider";

ReactDOM.render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <App />
  </StateProvider>,
  document.getElementById("root")
);
