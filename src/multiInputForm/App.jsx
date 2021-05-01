import React, { useState } from "react";
import "../index.css";

const App = () => {
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: ""
  });

  const formSubmit = (event) => {
    event.preventDefault();
    // console.log(event.target.value);
    //setData();
  };

  const inputEvent = (event) => {
    setData((preValue) => {
      if ("firstname" === event.target.name) {
        return {
          firstname: event.target.value,
          lastname: preValue.lastname,
          email: preValue.email
        };
      }
    });
  };

  return (
    <>
      <div id="container">
        <h1 id="heading">
          Hello {data.firstname} {data.lastname}
        </h1>
        <form onSubmit={formSubmit}>
          <input
            onChange={inputEvent}
            type="text"
            name="firstname"
            placeholder="Enter first name"
            value={data.firstname}
          />
          <input
            onChange={inputEvent}
            type="text"
            name="lastname"
            placeholder="Enter last name"
            value={data.lastname}
          />
          <input
            onChange={inputEvent}
            type="text"
            name="email"
            placeholder="Enter email"
            value={data.email}
          />
          <button id="my-button">Submit</button>
        </form>
      </div>
    </>
  );
};

export default App;
