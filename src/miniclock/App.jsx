import React, { useState } from "react";

const App = () => {
  let time = new Date().toLocaleTimeString();
  const [cTime, setTime] = useState(time);

  setTimeout(function () {
    let time = new Date().toLocaleTimeString();
    setTime(time);
  }, 1000);

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>{cTime}</h1>
      </div>
    </>
  );
};

export default App;
