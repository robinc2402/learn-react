import React from "react";
import "./slot.css";
import SlotM from "./Slot";

const App = () => {
  return (
    <>
      <h1 style={{ fontWeight: "bold" }}> Slot Machine </h1>
      <div>
        <SlotM x=":)" y=":-/" z=":d" />
        <SlotM x="=)" y="B)" z=":D" />
        <SlotM x=":-/" y=":-/" z=":-/" />
      </div>
    </>
  );
};

export default App;
