import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import SaveIcon from "@material-ui/icons/Save";
import IconButton from "@material-ui/core/IconButton";
import SingleListItem from "./SingleListItem";
import "../index.css";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1)
  }
}));

const App = () => {
  const [items, UpdateItems] = useState([]);

  const addItem = () => {
    // let newItemText = document.getElementById("newItem").value;
    let newVal = document.getElementById("newItem").value;
    if (!newVal.length) {
      return;
    }
    UpdateItems((prevState) => {
      return [...prevState, newVal];
    });
    document.getElementById("newItem").value = "";
  };

  const deleteItem = (id) => {
    UpdateItems((prevState) => {
      return prevState.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };

  const listItems = () => {
    return items.map((element, i) => {
      return <SingleListItem text={element} id={i} delete={deleteItem} />;
    });
  };

  const classes = useStyles();

  return (
    <>
      <div id="container">
        <div id="todo">
          <h1 id="heading">TODO List</h1>
          <div id="inner">
            <div id="addItems">
              <input
                type="text"
                name="newItem"
                id="newItem"
                placeholder="Add an item"
              />
              <Button
                id="addNewItem"
                variant="contained"
                color="primary"
                size="large"
                className={classes.button}
                startIcon={<SaveIcon />}
                onClick={addItem}
              ></Button>
            </div>
            <div id="itemsList">{listItems()}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
