import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Heading from "./Heading";
import Para from "./Para";
import Images from "./Images";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <>
    <Heading />
    <Para />
    <Images />
  </>,
  rootElement
);
