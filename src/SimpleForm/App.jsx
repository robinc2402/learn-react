import React, { useState } from "react";
import "../index.css";

const App = () => {
  const data = {
    fname: "",
    lname: "",
    email: "",
    phone: ""
  };
  const [formData, updateData] = useState(data);

  const formUpdate = (e) => {
    updateData((preValue) => {
      return {
        ...preValue,
        [e.target.name]: e.target.value
      };
    });
  };

  return (
    <>
      <div id="container">
        <h1 id="heading">Form</h1>
        <form id="simpleform">
          <input
            placeholder="First name"
            type="text"
            id="fname"
            name="fname"
            onChange={formUpdate}
            value={formData.fname}
          />
          <input
            placeholder="Last name"
            type="text"
            id="lname"
            name="lname"
            onChange={formUpdate}
            value={formData.lname}
          />
          <input
            placeholder="Email"
            type="text"
            id="email"
            name="email"
            onChange={formUpdate}
            value={formData.email}
          />
          <input
            placeholder="Phone"
            type="number"
            id="phone"
            name="phone"
            onChange={formUpdate}
            value={formData.phone}
          />
          <button id="button" onClick={formUpdate}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default App;
