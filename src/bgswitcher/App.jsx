import React, { useState } from "react";
import "./bg.css";

const App = () => {
  const bgStates = [
    { bgColor: "yellow", name: "Click Me!" },
    { bgColor: "purple", name: "Oops!" },
    { bgColor: "#34495e", name: "Hey!" },
    { bgColor: "#76b82a", name: "one.com" }
  ];

  const randomBg = () => {
    return bgStates[Math.floor(Math.random() * bgStates.length)];
  };

  const [newBg, setColor] = useState(
    bgStates[Math.floor(Math.random() * bgStates.length)]
  );

  const switchBG = () => {
    setColor(randomBg(newBg));
  };

  return (
    <>
      <div id="bg-container" style={{ backgroundColor: newBg.bgColor }}>
        <button
          id="my-button"
          style={{ fontSize: "32px", padding: "10px 20px" }}
          onClick={switchBG}
        >
          {newBg.name}
        </button>
      </div>
    </>
  );
};

export default App;
