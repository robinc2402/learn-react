import React from "react";
import ReactDOM from "react-dom";
import * as calculate from "./Calc";
ReactDOM.render(
  <>
    <ul>
      <li>Sum of 30 & 3 is = {calculate.add(30, 3)} </li>
      <li>Sub of 30 & 3 is = {calculate.sub(30, 3)} </li>
      <li>Mult of 30 & 3 is = {calculate.mult(30, 3)} </li>
      <li>Div of 30 & 3 is = {calculate.div(30, 3)} </li>
    </ul>
  </>,
  document.getElementById("root")
);
