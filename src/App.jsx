import React from "react";
import "./index.css";
import Heading from "./Heading";
import Para from "./Para";
import Images from "./Images";

const something = "Hi!";

function App() {
  return (
    <>
      <Heading />
      <Para />
      <Images />
    </>
  );
}

export default App;
export { something };
