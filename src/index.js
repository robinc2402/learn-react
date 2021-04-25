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

let heading = {
  textShadow: "2px 2px 0 black",
  fontWeight: "600"
};

let currDate = new Date(2021, 4, 1, 17).getHours();

let greeting = "Good morning";

if (currDate >= 12 && currDate < 16) {
  greeting = "Good afternoon";
} else if (currDate >= 16 && currDate <= 24) {
  greeting = "Good evening";
}

ReactDOM.render(
  <>
    <h1 className="title" style={heading}>
      Hi Robin, {greeting}
    </h1>
    <p>The date is {date}</p>
    <p>The date is {time}</p>
    <img src={img1} alt="example" />
    <img src={img2} alt="example" />
    <img src={img3} alt="example" />
  </>,
  rootElement
);
