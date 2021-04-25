import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";

const rootElement = document.getElementById("root");
let date = new Date().toLocaleDateString();
let time = new Date().toLocaleTimeString();

const img1 = "https://picsum.photos/200/200";
const img2 = "https://picsum.photos/300/200";
const img3 = "https://picsum.photos/100/200";

ReactDOM.render(
  <>
    <h1
      className="title"
      style={{
        color: "Red",
        fontWeight: "600"
      }}
    >
      Something
    </h1>
    <p>The date is {date}</p>
    <p>The date is {time}</p>
    <img src={img1} alt="example" />
    <img src={img2} alt="example" />
    <img src={img3} alt="example" />
  </>,
  rootElement
);
