import React from "react";
import ReactDOM from "react-dom";
import * as calculate from "./Calc";
ReactDOM.render(
  <>
    <ul>
      <li>Sum of two no is {calculate.add(30, 3)} </li>
      <li>Sub of two no is {calculate.sub(30, 3)} </li>
      <li>Mult of two no is {calculate.mult(30, 3)} </li>
      <li>Div of two no is {calculate.div(30, 3)} </li>
    </ul>
  </>,
  document.getElementById("root")
);
