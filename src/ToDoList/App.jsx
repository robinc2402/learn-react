import React from "react";
import "../index.css";

const App = () => {
  return (
    <>
      <div id="container">
        <div id="todo">
          <h1 id="heading">TODO List</h1>
          <div id="inner">
            <div id="addItem">
              <input type="text" />
              <button id="addNewItem">+</button>
            </div>
            <div id="itemsList">
              <div className="itemSingle">
                <button class="deleteItem">x</button>
                <span id="itemText">Item text here</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
