import React from "react";
import ReactDOM from "react-dom";

// import App from "./App";

const rootElement = document.getElementById("root");
let date = new Date().toLocaleDateString();
let time = new Date().toLocaleTimeString();

ReactDOM.render(
  <>
    <h1>Something</h1>
    <p>The date is {date}</p>
    <p>The date is {time}</p>
  </>,
  rootElement
);
