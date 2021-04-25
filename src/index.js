import React from "react";
import ReactDOM from "react-dom";
import App, { something } from "./App";
ReactDOM.render(
  <>
    <App />
    {something}
  </>,
  document.getElementById("root")
);
