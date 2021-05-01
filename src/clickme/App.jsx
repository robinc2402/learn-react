import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(100);

  const Incme = () => {
    setCount(count - 1);
  };

  return (
    <>
      <div style={{ textAlign: "center", color: "green" }}>
        <h1>{count}</h1>
        <button onClick={Incme}>Click me</button>
      </div>
    </>
  );
};

export default App;
