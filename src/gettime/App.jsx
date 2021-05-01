import React, { useState } from "react";

const App = () => {
  let newTime = new Date().toLocaleTimeString();

  const [currentTime, setTime] = useState(newTime);

  const getTime = () => {
    let newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  };

  return (
    <>
      <div style={{ textAlign: "center", color: "blue" }}>
        <h1 className="time">{currentTime}</h1>
        <button onClick={getTime}>Get Time</button>
      </div>
    </>
  );
};

export default App;
