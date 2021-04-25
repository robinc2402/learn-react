import React from "react";

let date = new Date().toLocaleDateString();
let time = new Date().toLocaleTimeString();

function Para() {
  return (
    <>
      <p>The date is {date}</p>
      <p>The date is {time}</p>
    </>
  );
}

export default Para;
