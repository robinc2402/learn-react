import React from "react";
import ReactDOM from "react-dom";
import * as AppObj from "./App";
ReactDOM.render(
  <>
    {AppObj.default()}
    {AppObj.something}
    {" " + AppObj.myName()}
  </>,
  document.getElementById("root")
);
