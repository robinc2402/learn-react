import React from "react";
import ReactDOM from "react-dom";
import App, { something, myName } from "./App";
ReactDOM.render(
  <>
    <App />
    {something}
    {" " + myName()}
  </>,
  document.getElementById("root")
);
