import React, { useState } from "react";
import "../index.css";

const App = () => {
  const [name, setName] = useState();

  const submit = (event) => {
    setName(event.target.value);
  };

  return (
    <>
      <div id="container">
        <div className="form">
          <h1 className="heading">
            Hello <span>{name}</span>!
          </h1>
          <input type="text" id="input-name" onChange={submit} value={name} />
          <button id="my-button" onClick={submit}>
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
